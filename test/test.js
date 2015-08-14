'use strict'

var assert = require('assert')
var jsstats = require('..')

var smallTestProgram = 'var foo = true; let bar = "hello"; function hi () { /* says hi */return "hello";i /*! special comment */ } // End hi()'

describe('jsstats', function() {

  it('should return an object full of stats', function () {
    var stats = jsstats(smallTestProgram)
    console.log(stats)
    assert.ok(stats)
  })

  it('should count the number of uses of let', function () {
    assert.equal(jsstats(smallTestProgram).variables.lets, 1)
  })

  it('should count the comment total', function() {
    assert.equal(jsstats(smallTestProgram).comments.total, 3)
  })

  it('should count the total of line comments', function() {
    assert.equal(jsstats(smallTestProgram).comments.line, 1)
  })

  it('should count the total of block comments', function() {
    assert.equal(jsstats(smallTestProgram).comments.block, 2)
  })
})
