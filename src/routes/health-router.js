const express = require('express')
const router = express.Router()

router.get('/health', (req, res) => {
  res.send('<h1>System is healthy</h1>')
})

module.exports = { healthRouter: router }
