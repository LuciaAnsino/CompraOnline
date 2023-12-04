FROM node:bookworm-slim

LABEL maintainer="luciaansino@correo.ugr.es"\
      version="5.0.3"

ENV NODE_VERSION 21.3.0

RUN mkdir /.pnpm && chmod 777 /.pnpm

RUN mkdir -p /app/test && chown -R node:node /app

USER root

RUN npm install -g pnpm@latest

USER node

WORKDIR /app/

COPY package*.json ./

RUN pnpm install ci

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test/

ENTRYPOINT ["pnpm", "run","test"]