# syntax=docker/dockerfile:1.7

########################################
# Build stage (Alpine + pnpm)
########################################
FROM --platform=linux/amd64 node:18.19-alpine3.19 AS builder

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Native build deps (for any addons + sharp during build)
RUN apk add --no-cache \
  libc6-compat \
  python3 \
  make \
  g++ \
  pkgconfig \
  vips-dev \
  fftw-dev

# Non-root user (match uid/gid in runtime)
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

WORKDIR /app

# Copy manifests first for better cache
COPY --chown=nextjs:nodejs package.json pnpm-lock.yaml ./

USER nextjs

# Install deps (full, for build)
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY --chown=nextjs:nodejs . .

ENV NODE_ENV=production
RUN pnpm build

# Prune devDependencies for lean runtime
RUN pnpm prune --prod


########################################
# Runtime stage (Alpine, next start)
########################################
FROM --platform=linux/amd64 node:18-alpine AS runner

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

# Runtime libs needed by sharp/Next on Alpine
RUN apk add --no-cache \
  libc6-compat \
  vips \
  fftw

# Non-root user (same uid/gid as builder)
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

WORKDIR /app

# Copy only what Next needs to serve with `next start`
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# Use the official Next server (serves /_next/static correctly)
CMD ["node","node_modules/next/dist/bin/next","start","-p","3000"]
