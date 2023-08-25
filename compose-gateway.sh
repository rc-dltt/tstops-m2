#!/bin/bash

echo '[ Server Gateway Compose ... ]'

cd server/final/gateway && \
	npm install && \
	npx rover supergraph compose \
		--elv2-license=accept \
		--config ./supergraph.yaml \
		> ./src/supergraph.graphql