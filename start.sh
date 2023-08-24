#!/bin/bash

echo '[ Server Gateway Compose ... ]'

cd server/final/gateway && \
	npm install && \
	npx rover supergraph compose \
		--elv2-license=accept \
		--config ./supergraph.yaml \
		> ./src/supergraph.graphql

echo '[ Server Build ... ]'

cd ../ && \
	docker compose -f ./server/final/docker-compose.yaml build

echo '[ Server Up ... ]'

docker compose -f ./server/final/docker-compose.yaml up -d

echo '[ Building iOS ...]'

cd ../../

cd react/frontend-demo/demo && \
	npm install

cd ./ios && \
	pod install

cd ../ && \
	npm run build:ios

echo '[ Running iOS ... ]'

npx react-native run-ios --port 8082