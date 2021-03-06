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
    console.log('Initialized! run "npm install" to install dependencies and then "npm start" to start the app')
  });
};

promzard(inputFile, {opts: opts}, function (err, args) {
  if (err) { throw err; }

  // Copy all the files in the appropriate template dir
  switch (args.language) {
    case 'coffee':
      copyTemplate('coffee');
      break;
    case 'javascript':
      copyTemplate('js');
      break;
    default:
      throw new Error('Invalid language. choose "coffee" or "javascript"');
  }
})
