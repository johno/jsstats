'use strict'

var _ = require('lodash')
var babel = require('babel')

var aggregateByType = require('./lib/aggregate-by-type')
var aggregateByTypes = require('./lib/aggregate-by-types')

module.exports = function jsstats(jsString) {
  if (typeof jsString !== 'string') {
    throw new TypeError('jsstats expected a string')
  }

  var ast = babel.transform(jsString).ast

  return {
    declarations: {
      total: aggregateByTypes(ast.program, ['VariableDeclaration', 'FunctionDeclaration'])
    },
    functions: {
      total: aggregateByType(ast.program, 'FunctionDeclaration')
    },
    expressions: {
      total: aggregateByType(ast.program, 'ExpressionStatement') 
    },
    variables: {
      total: aggregateByType(ast.program, 'VariableDeclaration'),
      letsOrConsts: Object.keys(ast.program._letReferences).length
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
