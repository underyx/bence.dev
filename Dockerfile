FROM ruby:2.5-alpine as jekyll

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN apk add --no-cache --virtual=.run-deps libcurl libffi &&\
    apk add --no-cache --virtual=.build-deps build-base libffi-dev &&\
    bundle install --system --no-cache &&\
    apk del .build-deps

COPY . ./
RUN jekyll build --destination /build

FROM nginx:1.15-alpine

COPY --from=jekyll /build /usr/share/nginx/html
COPY nginx.vhost.conf /etc/nginx/conf.d/default.conf
