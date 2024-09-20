FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run vitebuild
RUN npm prune --production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

ENV ORIGIN "http://localhost:3000"
# ENV CONNECTION_STRING ""


EXPOSE 3000
ENV NODE_ENV "production"

CMD ["node", "build"]