const express = require('express')
const router = express.Router()
const { secret } = require('../config')
const { sign } = require('../auth')

/* GET users listing. */
router.post('/login', async function (req, res, next) {
  // getUser from database
  sign({ username: 'dwa' }, secret, {}, (err, token) => {
    if (err) {
      throw new Error(err)
    } else {
      res.statusCode = 200
      res.json({
        ok: true,
        token
      })
    }
  })
})

module.exports = router
