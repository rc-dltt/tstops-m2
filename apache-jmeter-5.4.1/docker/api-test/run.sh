#!/bin/bash
## BUILD IMAGE
docker build -t jmt-api-test . --progress=plain --no-cache
## RUN TEST IMAGE
docker run -it --rm -v $(pwd)/test/:/opt/apache-jmeter-5.3/bin/test/ jmt-api-test
