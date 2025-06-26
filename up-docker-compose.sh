#!/bin/bash
docker rm -f $(docker ps -aq)
cd ~/Desktop/ukas-nodejs-docker/nginx-proxy
docker compose up -d

cd ~/Desktop/ukas-nodejs-docker
docker compose up -d --build