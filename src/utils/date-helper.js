const moment = require('moment-timezone')
const { FORMATO_DE_DATA } = require('../enums')
const { ValidationError } = require('../errors/validation-error')
const { locales } = require('../locales')

const isDatetimeValid = (dt) =>
  moment(dt, FORMATO_DE_DATA, true).isValid()

const isOffsetValid = (offset) => {
  const dt = '2023-12-31T14:00:00'
  const dtMaisOffset = `${dt}${offset}`
  return moment(dtMaisOffset, 'YYYY-MM-DDTHH:mm:ssZZ', true).isValid()
}

const toUtc = (dt, offset) => {

  if (!moment(dt, FORMATO_DE_DATA, true).isValid()) {
    throw new ValidationError(locales.__('DT_INVALID'))
  }

  const dtSemZulu = dt.slice(0, -1)
  const dtMaisOffset = `${dtSemZulu}${offset}`
  const dtUtc = moment(dtMaisOffset).utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
  return dtUtc
}

module.exports = {
  toUtc,
  isDatetimeValid,
  isOffsetValid,
}