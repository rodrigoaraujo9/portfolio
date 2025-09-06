# syntax=docker/dockerfile:1.7

############################
# Build stage
############################
FROM --platform=linux/amd64 node:18.19-alpine3.19 AS builder

# pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# native deps helper
RUN apk add --no-cache libc6-compat

# Create non-root user/group (uid/gid 1001)
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

WORKDIR /app

# Copy only manifests first for better cache
COPY --chown=nextjs:nodejs package.json pnpm-lock.yaml ./

# Install dependencies (no scripts yet)
USER nextjs
RUN pnpm install --frozen-lockfile

# Copy the rest of the source
COPY --chown=nextjs:nodejs . .

# Build (Next.js standalone)
ENV NODE_ENV=production
RUN pnpm build


############################
# Runner stage (production)
############################
FROM --platform=linux/amd64 node:18-alpine AS runner

# Create same user/group (match ids)
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

WORKDIR /app

# Copy the standalone server and static assets from builder
# .next/standalone contains server.js and the minimal node_modules required
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ 
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# If you have next.config in runtime needs (rare), copy it; not required for standalone

USER nextjs

# Env + network
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

# The standalone server entry is located at /app/server.js in this layout
CMD ["node", "server.js"]
