#!/usr/bin/env bash

onchange 'src/**/*.pug' 'src/styles/**/*.s+(a|c)ss' 'src/images/**/*.*' -- npm run build
