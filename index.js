#!/usr/bin/env node

"use strict";
var fs = require('fs');
var path = require('path');
var cpy = require('cpy');
var promzard = require('promzard');
var nomnom = require('nomnom');
var inputFile = require.resolve('./prompts');
var opts = nomnom
  .option('coffee', {
    abbr: 'c',
    flag: true
  })
  .option('javascript', {
    abbr: 'js',
    flag: true
  })
  .parse();

var dest = process.cwd();

var copyTemplate = function(name) {
  var src = path.join(__dirname, 'templates', name);
  cpy([src + '/*'], dest, function(err) {
    console.log('Initialized! run "electron ." to start this app')
  });
};

promzard(inputFile, {opts: opts}, function (err, args) {
  if (err) { throw err; }

  // Copy all the files in the appropriate template dir
  switch (args.language) {
    case 'coffee':
      console.log('Make sure to run "npm install" in this directory to get coffee-script')
      copyTemplate('coffee');
      break;
    case 'javascript':
      copyTemplate('js');
      break;
    default:
      throw new Error('Invalid language. choose "coffee" or "javascript"');
  }
})
