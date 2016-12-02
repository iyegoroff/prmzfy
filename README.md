prmzfy
=========
[![npm version](https://badge.fury.io/js/prmzfy.svg)](https://badge.fury.io/js/prmzfy)
[![Build Status](https://travis-ci.org/iyegoroff/prmzfy.svg?branch=master)](https://travis-ci.org/iyegoroff/prmzfy)
[![devDependency Status](https://david-dm.org/iyegoroff/prmzfy/dev-status.svg)](https://david-dm.org/iyegoroff/prmzfy?type=dev)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/prmzfy)

[![Build Status](https://saucelabs.com/browser-matrix/iyegoroff.svg)](https://saucelabs.com/beta/builds/b4948d1b7696be14a11bcd7f26f33aa6cbd835c9)

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