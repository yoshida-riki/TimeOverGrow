FROM node:14.15.1
RUN mkdir -p /usr/src/app \
    apt-get update && \
    apt-get upgrade -y && \
    yarn global add @vue/cli && \
    yarn global add @vue/cli-init && \
    yarn global add firebase-tools

EXPOSE 3000

WORKDIR /usr/src/app