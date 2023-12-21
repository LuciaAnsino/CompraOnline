FROM debian:bookworm-slim

LABEL maintainer="luciaansino@correo.ugr.es"\
      version="5.0.3"

RUN apt-get update \
&& apt-get -y upgrade \
&& apt-get install -y wget xz-utils which
RUN wget https://nodejs.org/dist/v21.4.0/node-v21.4.0-linux-x64.tar.xz 
RUN tar xvfJ node-v21.4.0-linux-x64.tar.xz 
RUN cp -r node-v21.4.0-linux-x64/bin/* /usr/local/bin/
RUN cp -r node-v21.4.0-linux-x64/lib/* /usr/local/lib/
RUN npm install -g pnpm@latest

RUN useradd -ms /bin/bash node


USER node 

WORKDIR /app/

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install ci

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test/

ENTRYPOINT ["pnpm", "run","test"]