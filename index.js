'use strict'

var _ = require('lodash')
var babel = require('babel')

module.exports = function jsstats(jsString) {
  if (typeof jsString !== 'string') {
    throw new TypeError('jsstats expected a string')
  }

  var ast = babel.transform(jsString).ast

  return {
    variables: {
      lets: Object.keys(ast.program._letReferences).length
    },
    comments: {
      total: ast.comments.length,
      block: _.select(ast.comments, function (obj) {
        return obj.type == 'CommentBlock'
      }).length,
      line: _.select(ast.comments, function (obj) {
        return obj.type == 'CommentLine'
      }).length
    }
  }
}
