const express = require('express')
const router = express.Router()
const { users } = require('../data')

router.post('/', (req, res) => {
  const { name } = req.body
  if (name in users) {
    return res.status(200).send(`Welcome, ${name}!`)
  }
  res.status(401).send('Invalid username.')
})

module.exports = router