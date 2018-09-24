const Sq = require('sequelize')
const db = require('../db')

const Guardian = db.define('guardian', {
  firstName: {
    type: Sq.STRING
  },
  lastName: {
    type: Sq.STRING
  },
  phoneNumber: {
    type: Sq.STRING // MOCK '9546656852'
  }
})

module.exports = Guardian

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
