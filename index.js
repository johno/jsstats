'use strict'

var _ = require('lodash')
var babel = require('babel')

module.exports = function jsstats(jsString) {
  if (typeof jsString !== 'string') {
    throw new TypeError('jsstats expected a string')
  }

  var ast = babel.transform(jsString).ast
  // console.log(ast.program)

  return {
    declarations: {
      total: _.select(ast.program.body, function (obj) {
        return ['VariableDeclaration', 'FunctionDeclaration'].indexOf(obj.type) !== -1
      }).length
    },
    expressions: {
      total: _.select(ast.program.body, function (obj) {
        return obj.type === 'ExpressionStatement'
      }).length
    },
    variables: {
      lets: Object.keys(ast.program._letReferences).length
    },
    comments: {
      total: ast.comments.length,
      block: _.select(ast.comments, function (obj) {
        return obj.type === 'CommentBlock'
      }).length,
      line: _.select(ast.comments, function (obj) {
        return obj.type === 'CommentLine'
      }).length
    }
  }
}
