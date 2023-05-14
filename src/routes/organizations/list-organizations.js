const { db } = require('../../models')
const { where, offset, lastPage } = require('../../utils/functions')

const filtros = [
  // [campo da querystring, operador de comparacao]
  ['name', db.Sequelize.Op.like],
  ['id', db.Sequelize.Op.eq]
]

module.exports = async (request, response) => {

  const page = request.query.page || 1
  const pageSize = request.query.pageSize || 10

  const { count, rows } = await db.Organization.findAndCountAll({
    where: where(request, filtros),
    offset: offset(page, pageSize),
    limit: pageSize
  })
  const lp = lastPage(count, pageSize)
  response.sendList(page, lp, rows, count)
}