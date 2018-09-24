const Sq = require('sequelize')
const db = require('../db')
const { Guardian } = require('./index')

const Student = db.define('student', {
  firstName: {
    type: Sq.STRING
  },
  lastName: {
    type: Sq.STRING
  },
  guardian: {
    type: Sq.INTEGER // MOCK 1-30
  },
  class: {
    type: Sq.INTEGER // MOCK 1-4
  }
})

module.exports = Student

/**
 * instanceMethods
 */
Student.prototype.getGuardian = function(id) {
  return Guardian.findById(id)
}
/**
 * classMethods
 */

/**
 * hooks
 */
