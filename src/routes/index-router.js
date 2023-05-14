const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h1>Bem-vindo!</h1>')
})

module.exports = { indexRouter: router }
