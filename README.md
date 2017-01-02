prmzfy
=========
[![npm version](https://badge.fury.io/js/prmzfy.svg?t=1483366246746)](https://badge.fury.io/js/prmzfy)
[![Build Status](https://travis-ci.org/iyegoroff/prmzfy.svg?t=1483366246746&branch=master)](https://travis-ci.org/iyegoroff/prmzfy)
[![Coverage Status](https://coveralls.io/repos/github/iyegoroff/prmzfy/badge.svg?t=1483366246746&branch=master)](https://coveralls.io/github/iyegoroff/prmzfy?branch=master)
[![dependencies Status](https://david-dm.org/iyegoroff/prmzfy/status.svg?t=1483366246746)](https://david-dm.org/iyegoroff/prmzfy)
[![devDependency Status](https://david-dm.org/iyegoroff/prmzfy/dev-status.svg?t=1483366246746)](https://david-dm.org/iyegoroff/prmzfy?type=dev)
[![typings included](https://img.shields.io/badge/typings-included-brightgreen.svg?t=1483366246746)](#typescript)
[![npm](https://img.shields.io/npm/l/express.svg?t=1483366246746)](https://www.npmjs.com/package/prmzfy)

[![Build Status](https://saucelabs.com/browser-matrix/iyegoroff.svg?t=1483366246746)](https://saucelabs.com/beta/builds/ed79bf765dd04e7f932b779453c3ac000)

Promisify for nodebacks. Requires Promise to be supported by runtime or via polyfill.

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

Don't forget to bind proper context when promisifying prototype methods:

```javascript
const prmzfy = require('prmzfy');

const foo = new Foo();

const bar = prmzfy(foo.someMethod.bind(foo)); 
```

### Typescript

This module also contains type declarations.

```typescript
import * as prmzfy from 'prmzfy';
```