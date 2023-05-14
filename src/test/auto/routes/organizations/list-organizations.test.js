const supertest = require('supertest')
const { app } = require('../../../../app')
const { getOrganizations } = require('../../../../utils/test-helper')
const api = supertest(app)

describe('quando tenho algumas organizations no bd...', () => {

  test('elas sao retornadas paginadas', async () => {
    await getOrganizations('Meu Item 01', 'Meu Item 02', 'Meu Item 03', 'Meu Item 04', 'Meu Item 05') //insert
    const [page, pageSize] = [1, 2]
    return await api
      .get(`/api/organizations?page=${page}&pageSize=${pageSize}`)
      .expect((res) => {
        expect(res.body.data.length).toBe(pageSize)
      })
  })

  test('recebo um erro se pedir uma pagina invalida', async () => {
    return api
      .get('/api/organizations?page=abc')
      .expect(res => {
        expect(res.body.error).toBeTruthy()
      })
  })

  test('consigo filtrar atraves de uma propriedade', async () => {
    const items = await getOrganizations('Meu Item 01', 'Meu Item 02', 'Meu Item 03', 'Meu Item 04', 'Meu Item 05') //insert
    const pageSize = 5
    const primItem = items[0]
    return api
      .get(`/api/organizations?name=${primItem.name}&pageSize=${pageSize}`)
      .expect(res => {
        expect(res.body.data.length).toBe(1)
        expect(res.body.data[0].name).toBe(primItem.name)
      })
  })

})