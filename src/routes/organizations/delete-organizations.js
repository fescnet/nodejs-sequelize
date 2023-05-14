const { db } = require('../../models')

module.exports = async (request, response) => {
  const { id } = request.params

  const model = await db.Organization.findByPk(id)
  if (model) {
    await model.destroy()
  }

  response.status(204).sendItem(model)
}