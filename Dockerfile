FROM node:12 as gatsby

WORKDIR /app

COPY package.json package-lock.json ./
RUN apt-get update &&\
    apt-get install libgl1-mesa-glx libvips libfribidi0 libharfbuzz-dev -y --no-install-recommends &&\
    npm ci

COPY . ./
RUN npx gatsby build

FROM nginx:1.16-alpine

COPY --from=gatsby /app/public /usr/share/nginx/html
COPY static/* /usr/share/nginx/html/
COPY nginx.vhost.conf /etc/nginx/conf.d/default.conf
