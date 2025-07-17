
FROM oven/bun:1.1.13 AS builder

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build


FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./


RUN npm install --omit=dev


RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
