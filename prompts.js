"use strict";

var fs = require('fs')
module.exports = {
  "language": prompt("Preferred language? 'coffee' or 'js'", "coffee", function (lang) {
    return lang;
  }),
  "directory": process.cwd()
}
