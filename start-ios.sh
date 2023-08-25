#!/bin/bash

echo '[ Building iOS ...]'

cd react/frontend-demo/demo && \
	npm install

cd ./ios && \
	pod install

cd ../ && \
	npm run build:ios

echo '[ Running iOS ... ]'

npx react-native run-ios --port 8082