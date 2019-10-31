const express = require('express')
const router = express.Router()
const { comments: Comment } = require('../models')
const jwt = require('express-jwt')
const { secret } = require('../config')

/* GET comments listing. */
router.get('/', jwt({ secret }), async function (req, res, next) {
  let comments = null
  const { user } = req

  if (user) {
    try {
      comments = await Comment.findAll()
    } catch (err) {
      res.statusCode = 500
      res.json({
        ok: false,
        message: err.message
      })
      return
    }

    res.json({
      ok: true,
      comments,
      message: 'El jugador ha sido registrado'
    })
  } else {
    return next(new Error('Unauthorize'))
  }
})

/* POST create a comment */
router.post('/', async function (req, res, next) {
  let comment = null
  try {
    comment = await Comment.create(req.body)
  } catch (err) {
    res.json({
      ok: false,
      message: err.message
    })
    return
  }

  res.json({
    ok: true,
    comment,
    message: 'El jugador ha sido registrado.'
  })
})

module.exports = router
