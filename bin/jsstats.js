#!/usr/bin/env node

var fs = require('fs')
var meow = require('meow')
var jsStats = require('..')

var helpText = [
  'Usage',
  '  jsstats --file=script.js'
]

var cli = meow({
  help: helpText,
  h: helpText,
  pkg: '../package.json'
})

if (cli.flags.h) {
  console.log(cli.help)
}

if (cli.flags.v) {
  console.log(cli.pkg.version)
}

if (cli.flags.file) {
  var js = fs.readFileSync(cli.flags.file, 'utf8')
  console.log(jsStats(js))  
}
