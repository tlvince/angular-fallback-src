#!/bin/sh

node "test/server.js" &
pid="$!"
karma start "test/karma.conf.js" --single-run
kill "$pid"
