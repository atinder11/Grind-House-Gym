# --------------------------
# 1. Base Image
# --------------------------
FROM node:18-alpine AS base
WORKDIR /app

# --------------------------
# 2. Install Dependencies
# --------------------------
FROM base AS deps
COPY package*.json ./
RUN npm ci

# --------------------------
# 3. Build the Next.js App
# --------------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build using ONLY public vars from .env
# NEXT_PUBLIC_* come from .env file during "docker run", not now
RUN npm run build

# --------------------------
# 4. Production Runner
# --------------------------
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

# Copy built output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
