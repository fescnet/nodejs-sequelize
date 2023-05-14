const { validationResult } = require('express-validator')
const { ValidationError } = require('../errors/validation-error')
const { stringfyErrors } = require('../utils/functions')

const validateRequest = (request, response, next) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    const errorMsg = stringfyErrors(errors)
    throw new ValidationError(errorMsg)
  }

  next()
}

module.exports = {
  validateRequest,
}