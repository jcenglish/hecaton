const router = require('express').Router()
const {Employee, Student, Class} = require('../db/models')
module.exports = router

router.get('/:employeeId/classes', async (req, res, next) => {
  try {
    const classes = await Employee.findById(req.params.employeeId).getClasses()
    res.json(classes)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id, {
      attributes: ['id', 'email']
    })
    res.json(employee)
  } catch (err) {
    next(err)
  }
})
// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })
