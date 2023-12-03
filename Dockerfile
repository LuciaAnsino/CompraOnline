FROM node:bookworm-slim

LABEL maintainer="luciaansino@correo.ugr.es"

ENV NODE_VERSION 20.8.0

RUN mkdir /.pnpm && chmod 777 /.pnpm

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g pnpm@latest

RUN pnpm install

WORKDIR /app/test

ENTRYPOINT ["pnpm","run", "test"]