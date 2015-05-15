"use strict";

var fs = require('fs')
module.exports = {
  // 'directory': function (cb) {
  //   var opts = this.opts;
  //   if (opts[0]) {
  //     cb(null, opts[0]);
  //   } else {
  //     cb(null, process.cwd());
  //   }
  // },
  'language': function (cb) {
    var opts = this.opts;
    if (opts.coffee) {
      cb(null, 'coffee');
    } else if (opts.javascript) {
      cb(null, 'javascript');
    } else {
      cb(null, prompt('Preferred language? "coffee" or "javascript"', 'coffee', function (lang) {
        return lang;
      }));
    }
  }
}
