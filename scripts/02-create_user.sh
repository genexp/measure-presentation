#!/bin/bash

# Create an admin user
curl -X POST 'http://localhost:8086/cluster_admins?u=root&p=root' \
-d '{"name": "root", "password": "root"}'
