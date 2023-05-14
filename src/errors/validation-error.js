const CustomError = require('./custom-error')

class ValidationError extends CustomError {
  constructor (message) {
    super(message)
    this.statusCode = 400
  }
}

module.exports = { ValidationError }