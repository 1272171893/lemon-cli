#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
program.version(pkg.version);
program.command('init <name>').description('init project').action(name => console.log(name));
program.parse(process.argv);