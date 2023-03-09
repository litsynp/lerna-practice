'use strict';

const logCore = require('..');
const assert = require('assert').strict;

assert.strictEqual(logCore(), 'Hello from logCore');
console.info('logCore tests passed');
