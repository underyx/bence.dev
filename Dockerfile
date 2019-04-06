FROM node:11 as gatsby

WORKDIR /app

COPY package.json package-lock.json  ./
RUN apt-get update &&\
    apt-get install libvips libfribidi0 libharfbuzz-dev -y --no-install-recommends &&\
    npm ci

COPY . ./
RUN npx gatsby build

FROM nginx:1.15-alpine

COPY --from=gatsby /app/public /usr/share/nginx/html
COPY nginx.vhost.conf /etc/nginx/conf.d/default.conf