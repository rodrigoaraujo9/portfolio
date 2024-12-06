# Build stage
FROM --platform=linux/amd64 node:18.19-alpine3.19 AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Add necessary packages and create non-root user
RUN apk add --no-cache libc6-compat && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Set proper permissions
RUN chown -R nextjs:nodejs .

# Build the application
RUN pnpm build

# Production stage
FROM --platform=linux/amd64 node:18-alpine AS runner

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built assets from builder
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NODE_ENV production

CMD ["node", "server.js"] 