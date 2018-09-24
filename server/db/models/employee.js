const crypto = require('crypto')
const Sq = require('sequelize')
const db = require('../db')

const Employee = db.define('emplyee', {
  email: {
    type: Sq.STRING,
    validate: {
      isEmail: true
    }
  },
  firstName: {
    type: Sq.STRING
  },
  lastName: {
    type: Sq.STRING
  },
  // startingDate: {
  //   type: Sq.DATE
  // },
  // endingDate: {
  //   type: Sq.DATE
  // },
  password: {
    type: Sq.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sq.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sq.STRING
  }
})

module.exports = Employee

/**
 * instanceMethods
 */
Employee.prototype.correctPassword = function(candidatePwd) {
  return Employee.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
Employee.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Employee.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = Employee.generateSalt()
    user.password = Employee.encryptPassword(user.password(), user.salt())
  }
}

Employee.beforeCreate(setSaltAndPassword)
Employee.beforeUpdate(setSaltAndPassword)
