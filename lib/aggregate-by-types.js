'use strict'

var _ = require('lodash')

module.exports = function aggregateByType (ast, types) {
  return _.select(ast.body, function (obj) {
    return types.indexOf(obj.type) !== -1
  }).length
}
