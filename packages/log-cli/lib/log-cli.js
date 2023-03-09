#!/usr/bin/env node
import { program } from 'commander'
import { core as LogCore } from 'log-core'

// action
program.action((cmd) => LogCore())

program.parse(process.argv)
