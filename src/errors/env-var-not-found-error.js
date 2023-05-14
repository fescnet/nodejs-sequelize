const CustomError = require('./custom-error')

class EnvVarNotFoundError extends CustomError {
  constructor (message) {
    super(message)
    this.statusCode = 500
  }
}

module.exports = { EnvVarNotFoundError }