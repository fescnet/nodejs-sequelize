const { NotFound } = require('../../errors/not-found-error')
const { db } = require('../../models')

module.exports = async (request, response) => {

  const { name } = request.body
  const { id } = request.params

  const model = await db.Organization.findByPk(id)
  if (!model) {
    throw new NotFound('ITEM_NOT_FOUND_ERROR')
  }
  model.set({
    name
  })
  await model.save()

  response.status(200).sendItem(model)
}