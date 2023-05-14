const supertest = require('supertest')
const { app } = require('../../../../app')
const api = supertest(app)
const { db } = require('../../../../models')

describe('no endpoint de criar organization consigo...', () => {

  test('gravar um item valido no banco atraves da API', async () => {

    await api
      .post('/api/organizations')
      .send({
        name: 'organization 01',
      })
    const model = await db.Organization.findOne({ where: { name: 'organization 01' } })
    return expect(model).toBeTruthy()

  })

  test('receber erro ao tentar gravar item invalido', async () => {
    return await api
      .post('/api/organizations')
      .expect(400)
  })

  test('receber retorno 201 ao criar item valido', async () => {

    return await api
      .post('/api/organizations')
      .send({
        name: 'organization 01',
      })
      .expect(201)
  })
})