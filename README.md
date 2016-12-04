prmzfy
=========
[![npm version](https://badge.fury.io/js/prmzfy.svg)](https://badge.fury.io/js/prmzfy)
[![Build Status](https://travis-ci.org/iyegoroff/prmzfy.svg?branch=master)](https://travis-ci.org/iyegoroff/prmzfy)
[![Coverage Status](https://coveralls.io/repos/github/iyegoroff/prmzfy/badge.svg?branch=master)](https://coveralls.io/github/iyegoroff/prmzfy?branch=master)
[![devDependency Status](https://david-dm.org/iyegoroff/prmzfy/dev-status.svg)](https://david-dm.org/iyegoroff/prmzfy?type=dev)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/prmzfy)

[![Build Status](https://saucelabs.com/browser-matrix/iyegoroff.svg)](https://saucelabs.com/beta/builds/ed79bf765dd04e7f932b779453c3ac000)

Promisify for nodebacks.

## Installation

```bash
$ npm i prmzfy
```

## Usage

```javascript
const prmzfy = require('prmzfy');

const readFile = prmzfy(fs.readFile);

readFile('file.txt')
    .then(data => ...)
    .catch(error => ...);
```

Promisifying callback with multiple arguments:

```javascript
const prmzfy = require('prmzfy');

const sumAndProd = (a, b, cb) => {
    cb(null, a + b, a * b);
};

const sp = prmzfy(sumAndProd, { multiArgs: true });

sp(3, 4)
    .then(([sum, prod]) => console.log(sum, prod));
```