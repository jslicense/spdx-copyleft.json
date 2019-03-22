// Check that each string in the exported array is an SPDX license expression.

var assert = require('assert')
var parse = require('spdx-expression-parse')
var copyleft = require('./')
var pending = ['Parity-6.0.0']

copyleft.forEach(function (identifier) {
  if (pending.includes(identifier)) return
  assert.doesNotThrow(function () {
    parse(identifier)
  }, identifier + ' is a valid SPDX identifier')
})
