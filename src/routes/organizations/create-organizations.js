const { db } = require('../../models')

module.exports = async (request, response) => {

  const { name } = request.body
  const model = await db.Organization.create({ name })

  response.status(201).sendItem(model)
}