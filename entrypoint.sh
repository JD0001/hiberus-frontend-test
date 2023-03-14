#!/bin/sh

echo "Starting JSON-server..." 
json-server --host 0.0.0.0 /usr/share/jsonserver/db/db.js --routes /usr/share/jsonserver/db/db.routes.json &

nginx -g "daemon off;"