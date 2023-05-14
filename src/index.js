const { app } = require('./app.js')
const http = require('http')
const { configs } = require('./config')
const { verificarEnvVars } = require('./utils/verificar-env-vars')
const { db } = require('./models')
const runAllSeeders = require('./seeders')

verificarEnvVars(configs)

const server = http.createServer(app)
const recriarDB = true // colocar true quando quiser alterar a estrutura do DB

const startApp = async () => {
  if (recriarDB) {
    await db.sequelize.sync({ force: true })
    await runAllSeeders()
  }

  server.listen(configs.PORT, () => {
    console.log(
      `Listenning at http://localhost:${configs.PORT}/.  Running on ${configs.ENV} mode.`
    )
  })
}

startApp()

