#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const init = require('../lib/init');
program.version(pkg.version);
program.command('init <name>').description('init project').action(init);
program.parse(process.argv);