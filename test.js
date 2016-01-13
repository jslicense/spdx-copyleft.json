// Check that each string in the exported array is an SPDX license expression.

var assert = require('assert')
var parse = require('spdx-expression-parse')
var copyleft = require('./')

copyleft
  .forEach(function(identifier) {
    assert.doesNotThrow(
      function() { parse(identifier) },
      ( identifier + ' is a valid SPDX identifier' )) })
