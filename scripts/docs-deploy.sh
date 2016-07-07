#!/bin/sh

rsync -rv --rsync-path="mkdir -p /var/www/oui/$(node -e "console.log(require('./package.json').version);") && rsync" --delete ./dist/docs/ ubuntu@design.optimizely.com:/var/www/oui/$(node -e "console.log(require('./package.json').version);")/react
