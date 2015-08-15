'use strict'

var _ = require('lodash')

module.exports = function aggregateByType (ast, type) {
  return _.select(ast.body, function (obj) {
    return obj.type === type
  }).length
}
