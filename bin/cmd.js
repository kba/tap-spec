#!/usr/bin/env node

var tapSpec = require('../');
var tapSpec = tapSpec();

process.stdin
  .pipe(tapSpec)
  .pipe(process.stdout);

process.on('exit', function (status) {
  
  if (tapSpec.failed) {
    process.exit(1);
  }

  process.exit(status);
  
});
