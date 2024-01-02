FROM debian:bookworm-slim

LABEL maintainer="luciaansino@correo.ugr.es"\
      version="5.0.3"

RUN apt-get update \
&& apt-get install -y wget xz-utils \
&& wget https://nodejs.org/dist/v21.4.0/node-v21.4.0-linux-x64.tar.xz \
&& tar xvfJ node-v21.4.0-linux-x64.tar.xz \
&& cp -r node-v21.4.0-linux-x64/bin/* /usr/local/bin/ \
&& cp -r node-v21.4.0-linux-x64/lib/* /usr/local/lib/ \
&& rm -rf node-v21.4.0-linux-x64.tar.xz node-v21.4.0-linux-x64\
&& npm install -g pnpm@latest \
&& useradd -ms /bin/bash node

USER node 

WORKDIR /app/

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install ci

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test/

ENTRYPOINT ["pnpm", "run","test"]

CMD ["tail", "-f", "/dev/null"]