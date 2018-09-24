const Sq = require('sequelize')
const db = require('../db')
const twilio = require('twilio')
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

const Employee = db.define('employee', {
  email: {
    type: Sq.STRING, // MOCK thisjasmine0@gmail.com
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
  role: {
    type: Sq.INTEGER // MOCK 0=Teacher, 1=Security, 3=Principal
  }
})

module.exports = Employee

/**
 * instanceMethods
 */
Employee.prototype.sendSMS = function(body, phoneNumber) {
  client.messages
    .create({
      body: body,
      to: '+1' + phoneNumber,
      from: '+19546656852'
    })
    .then(message => console.log(message.sid))
}
/**
 * classMethods
 */

/**
 * hooks
 */
