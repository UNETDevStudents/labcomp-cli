#!/usr/bin/env bash

OUTPUT="dist"

if [ "$NODE_ENV" == "production" ]; then
  OUTPUT="public"
fi

rm -rf $OUTPUT
