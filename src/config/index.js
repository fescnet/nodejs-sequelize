const dotenv = require('dotenv')
dotenv.config()

const PROD_ENV = 'production'
const DEV_ENV = 'development'
const TEST_ENV = 'test'

const ENV = process.env.NODE_ENV

const PROD_DB = {
  HOST: process.env.PROD_DB_HOST,
  PORT: process.env.PROD_DB_PORT,
  USER: process.env.PROD_DB_USER,
  PASS: process.env.PROD_DB_PASS,
  SCHEMA: process.env.PROD_DB_SCHEMA,
}

const DEV_DB = {
  HOST: process.env.DEV_DB_HOST,
  PORT: process.env.DEV_DB_PORT,
  USER: process.env.DEV_DB_USER,
  PASS: process.env.DEV_DB_PASS,
  SCHEMA: process.env.DEV_DB_SCHEMA,
}

const TEST_DB = {
  HOST: process.env.TEST_DB_HOST,
  PORT: process.env.TEST_DB_PORT,
  USER: process.env.TEST_DB_USER,
  PASS: process.env.TEST_DB_PASS,
  SCHEMA: process.env.TEST_DB_SCHEMA,
}

const PORT = process.env.PORT

let DB_INFO
switch (ENV) {
case TEST_ENV:
  DB_INFO = TEST_DB
  break
case PROD_ENV:
  DB_INFO = PROD_DB
  break
case DEV_ENV:
  DB_INFO = DEV_DB
  break
default:
  DB_INFO = undefined
  break
}

module.exports = { configs: { DB_INFO, PORT, ENV } }
