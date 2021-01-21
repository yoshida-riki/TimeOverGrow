FROM node:14.15.1-alpine

ARG WORKDIR
ARG CONTAINER_PORT
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL} \
    # 追加
    NPM_CONFIG_PRODUCTION=false

# ENV check
RUN echo ${HOME}
RUN echo ${CONTAINER_PORT}
RUN echo ${API_URL}

WORKDIR ${HOME}

# 追加
COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn run build
# ここまで

EXPOSE ${CONTAINER_PORT}