#!/bin/sh

node "test/server.js" >/dev/null 2>&1 &
pid="$!"
karma start "test/karma.conf.js" --single-run
kill "$pid"
