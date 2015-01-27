#!/bin/bash

# create a database
curl -X POST 'http://localhost:8086/db?u=root&p=root' \
-d '{"name": "sample"}'
