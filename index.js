"use strict";
var promzard = require('promzard');
var nomnom = require('nomnom');
var inputFile = require.resolve('./prompts');
var opts = nomnom.parse();

promzard(inputFile, {opts: opts}, function (er, data) {
  console.log(data);
})
