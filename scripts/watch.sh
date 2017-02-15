#!/usr/bin/env bash

onchange 'src/**/*.pug' 'src/styles/**/*.s+(a|c)ss' -- npm run build
