const supertest = require('supertest')
const { app } = require('../../../../app')
const api = supertest(app)
const { db } = require('../../../../models')

describe('No endpoint de atualizar organization consigo...', () => {

  test('atualizar um item com uma request valida', async () => {

    const oldModel = await db.Organization.create({
      name: 'name Antiga',
    })
    await api
      .put(`/api/organizations/${oldModel.id}`)
      .send({
        name: 'Nome nova',
      })
    const newModel = await db.Organization.findByPk(oldModel.id)
    return expect(newModel.name).toBe('Nome nova')

  })

  test('receber um erro com uma request invalida', async () => {

    const oldModel = await db.Organization.create({
      name: 'name Antiga',
    })
    return await api
      .put(`/api/organizations/${oldModel.id}`)
      .send({})
      .expect(400)
  })
})