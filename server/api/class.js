const router = require('express').Router()
const {Employee, Student} = require('../db/models')
module.exports = router

router.get('/students', async (req, res, next) => {
  try {
    const students = await Class.findById(req.params.classId).getRoster()
    res.json(classes)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const classes = await Class.findAll()
    res.json(classes)
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
