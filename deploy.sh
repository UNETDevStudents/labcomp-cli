#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
if [ "$TRAVIS_BRANCH" == "deploy" ]; then
    echo "This will deploy!";
    cd public && sshpass -p $RSYNC_PASSWORD rsync -avrz . root@labcomp.edwarbaron.me:/root/labcomp-api/django/public/app
    echo ":)";
else
    echo "Push not deploy!"
fi
else
    echo "PR not deploy!"
fi
