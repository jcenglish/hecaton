const Employee = require('./employee')
const Guardian = require('./guardian')
const Student = require('./student')
const Role = require('./role')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// Role.belongsToMany(Employee) // Volunteer, Team Leader, etc... unpaid roles
// Role.belongsToMany(Guardian)
// Role.belongsToMany(Student)

// Student.belongsToMany(Guardian, {
//   through: 'Family'
// })

// Guardian.belongsToMany(Student, {
//   through: 'Family' // Define relationship in model
// })

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Employee,
  Student,
  Guardian,
  Role
}
