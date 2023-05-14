class CustomError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
    this.statusCode = 500
  }

}

module.exports = CustomError