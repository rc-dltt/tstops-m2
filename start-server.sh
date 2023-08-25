#!/bin/bash

echo '[ Server Build ... ]'

cd ../ && \
	docker compose -f ./server/final/docker-compose.yaml build

echo '[ Server Up ... ]'

docker compose -f ./server/final/docker-compose.yaml up -d