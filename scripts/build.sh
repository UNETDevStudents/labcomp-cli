#!/usr/bin/env bash

OUTPUT="dist"
PRETTY="-P"

if [ "$NODE_ENV" == "production" ]; then
  OUTPUT="public"
  PRETTY=""
fi

node-sass src/styles/main.sass -o $OUTPUT/assets/css
pug src/pages -o $OUTPUT $PRETTY
