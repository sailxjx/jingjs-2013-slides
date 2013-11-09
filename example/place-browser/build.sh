#!/bin/bash
browserify -r level-js:leveldown -r placename main.js > bundle.js
