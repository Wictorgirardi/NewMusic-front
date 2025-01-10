FROM node:18.18.0 AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn 

COPY . .

RUN yarn build

FROM node:18 AS runner

WORKDIR /app

COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src ./src

EXPOSE 3000

CMD ["yarn", "start"]