const { validationResult } = require('express-validator')
const { ValidationError } = require('../errors/validation-error')
const locales = require('../locales')
const { stringfyErrors, removeNotAllowedProps } = require('./functions')

/**
 *
 * @param {*} request
 * @param {*} itemValidationRules passar a validacao CREATE da entidade.  Ela esta no rules.js.
 * @param {*} allowedProps array de strings com as propriedades que podem ser gravadas pelo cliente.
 * @param {*} maxItems numero maximo de itens que podem ser gravados de uma vez.
 * @param {*} model model da entidade.  Ex: db.Usuario
 * @returns
 */
const bulkCreate = async (request, itemValidationRules, allowedProps, maxItems, model) => {
  if (!Array.isArray(request.body)) {
    throw new ValidationError(locales.__('NOT_AN_ARRAY'))
  }
  if (request.body.length > maxItems) {
    throw new ValidationError(locales.__('ARRAY_IS_TOO_BIG'))
  }

  const promisesArray = []
  for (let i = 0; i < request.body.length; i++) {
    let item = request.body[i]
    const promise = createItem(item, itemValidationRules, allowedProps, model)
    promisesArray.push(promise)
  }
  const responseArray = await Promise.all(promisesArray)
  return responseArray
}

const createItem = async (item, itemValidationRules, allowedProps, model) => {
  removeNotAllowedProps(item, allowedProps)
  const fakeRequest = { body: item }
  const fakeResponse = {}
  const fakeNext = () => { }

  itemValidationRules.forEach(async (rule) => {
    await rule(fakeRequest, fakeResponse, fakeNext)
  })

  const errors = validationResult(fakeRequest)
  let errorMsg = ''
  if (!errors.isEmpty()) {
    errorMsg = stringfyErrors(errors)
  }

  if (!errorMsg) {
    try {
      item = await model.create(item)
    }
    catch (error) {
      errorMsg = error.message
    }
  }

  const newItem = {
    error: errorMsg,
    item,
  }
  return newItem
}

module.exports = {
  bulkCreate,
}