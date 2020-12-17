FROM node:12.4.0-alpine

WORKDIR /app

RUN apk update && \
 apk add git && \
 npm install -g npm && \
 npm install -g vue-cli

EXPOSE 9000