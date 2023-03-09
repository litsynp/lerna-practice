'use strict';

const logCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(logCli(), 'Hello from logCli');
console.info('logCli tests passed');
