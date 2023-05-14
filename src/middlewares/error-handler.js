const CustomError = require('../errors/custom-error')

const errorHandler = (error, request, response, next) => {

  if (error instanceof CustomError) {
    return response.status(error.statusCode).send({ error: error.message })
  }

  console.log(error.message)
  response.status(400).send({ error: 'Something went wrong' })

  next(error)
}

module.exports = {
  errorHandler
}