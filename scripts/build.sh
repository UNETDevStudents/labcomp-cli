#!/usr/bin/env bash

OUTPUT="dist"
PRETTY="-P"

if [ "$NODE_ENV" == "production" ]; then
  OUTPUT="public"
  PRETTY=""
fi

node-sass --include-path node_modules/bourbon/app/assets/stylesheets src/styles/main.sass -o $OUTPUT/assets/css
pug src/pages -o $OUTPUT $PRETTY
cp -R src/assets/. $OUTPUT/assets/
