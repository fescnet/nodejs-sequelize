const { db } = require('../models')
// funcao de exemplo usada nos testes
const sayHello = (name) => {
  return `Hello, ${name}!`
}

const where = (request, filtros) => {
  const w = {}
  for (let i = 0; i < filtros.length; i++) {
    const campo = filtros[i][0]
    const operador = filtros[i][1]
    let val = filtros[i][2] || undefined
    val = val || request.query[campo] || undefined
    if (val) {
      const nVal = operador === db.Sequelize.Op.like
        ? `%${val}%`
        : val
      w[campo] = { [operador]: nVal }
    }
  }
  return w
}

const stringfyErrors = (errors) => {
  return errors.array().reduce((partial, current) => {
    return partial === '' ? current.msg : `${partial} and ${current.msg}`
  }, '')
}

const offset = (page, pageSize) => page * pageSize - pageSize
const lastPage = (count, pageSize) => count ? Math.ceil(count / pageSize) : 0

const removeNotAllowedProps = (item, allowedProps) => {
  //iterate over item properties
  for (const prop in item) {
    //check if property is allowed
    if (!allowedProps.includes(prop)) {
      //if not, delete it
      delete item[prop]
    }
  }
}

module.exports = {
  sayHello,
  where,
  offset,
  lastPage,
  stringfyErrors,
  removeNotAllowedProps
}

