const express = require('express')
const cookieParser = require('cookie-parser')
require('express-async-errors')
const path = require('path')
const cors = require('cors')
const { errorHandler } = require('./middlewares/error-handler')
const { healthRouter } = require('./routes/health-router')
const { indexRouter } = require('./routes/index-router')
const { organizationsRouter } = require('./routes/organizations')
const { unknownEndpoint } = require('./middlewares/unknown-endpoint')
const responseFormatter = require('./middlewares/response-formatter')
const app = express()
app.use(cookieParser())
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//TODO: origin e credentials foram usados para o ambiente de desenvolvimento
// talvez nao seja necessario para o ambiente de producao
// caso nao sejam necessarios, remover "withCredentials: true" das chamadas do axios no frontend
// Talvez nao seja preciso o "sameSite: 'Lax'" no setup do cookie aqui no backend
// para ficar mais seguro na produção: cookie always secure, always httpOnly, and with the proper same site flag.
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(responseFormatter)

//inicio dos endpoints
app.use(organizationsRouter)
app.use(healthRouter)
app.use(indexRouter)
// os arquivos estaticos abaixo sao apenas para testar alguma coleta de informacao no browser
// nao apagar os arquivos ate o frontend estar desenvolvido
app.use('/static', express.static(path.join(__dirname, 'public')))
// fim dos endpoints

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = { app }
