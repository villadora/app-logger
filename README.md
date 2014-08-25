# app-logger

[![NPM version](https://badge.fury.io/js/app-logger.svg)](http://badge.fury.io/js/app-logger)

This is some code that I repeated in every apps.

## Install

```bash
$ npm install app-logger --save
```

## Usage

```js
var logger = require('app-logger');
logger.init({});


var logger = require('app-logger')('component');

logger.error('Error happens');
```

## Licence

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->
