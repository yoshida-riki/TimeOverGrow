FROM node:14.15.4
RUN mkdir -p /usr/src/app \
    apt-get update && \
    apt-get upgrade -y && \
    yarn global add @vue/cli && \
    yarn global add @vue/cli-init

EXPOSE 3000

WORKDIR /usr/src/app