FROM node:bookworm-slim

LABEL maintainer="luciaansino@correo.ugr.es"

ENV NODE_VERSION 20.8.0

RUN mkdir /usr/local/lib/node_modules/pnpm && chmod 777 /usr/local/lib/node_modules/pnpm

RUN chown -R node:node /usr/local/lib/node_modules/

RUN mkdir /.pnpm && chmod 777 /.pnpm

RUN mkdir -p /app/test && chown -R node:node /app

USER root

RUN npm install -g pnpm@latest

USER node

WORKDIR /app

COPY package.json package-lock.json ./

#RUN rm -f package.json package-lock.json

RUN pnpm install

WORKDIR /app/test

ENTRYPOINT ["pnpm","run", "test"]