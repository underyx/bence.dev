#!/bin/sh
export COMPOSE_FILE=docker-compose.yml

docker-compose build
docker-compose push

echo "Confirm deploy with:"
echo
echo "kubectl set image deployment/underyx-me app=underyx/underyx.me@sha256:"
