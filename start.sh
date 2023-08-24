#!/bin/bash

echo 'Server Gateway Compose...'

cd server/final/gateway && \
	npm install && \
	npx rover supergraph compose \
		--elv2-license=accept \
		--config ./supergraph.yaml \
		> ./src/supergraph.graphql

echo 'Server Build ...'

docker compose -f ./server/final/docker-compose.yaml build

echo 'Server Up ...'

docker compose -f ./server/final/docker-compose.yaml up -d

echo 'Build iOS ...'

cd react/frontend-demo/demo/ios && \
	pod install
	cd react/frontend-demo/demo && \
	npm run build:ios

echo 'Run iOS ...'

cd ./react/frontend-demo/demo && \
	npx react-native run-ios --port 8082