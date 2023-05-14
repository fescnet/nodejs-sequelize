const sayHello = require('../../../utils/functions').sayHello

describe('exemplificando como fazer um teste unitario simples', () => {
  test('sayHello returns a greeting', () => {
    const result = sayHello('Fulano')
    expect(result).toBe('Hello, Fulano!')
  })
})

// const supertest = require('supertest')
// const app  = require('../app')

// const api = supertest(app)

// test('notes are returned as json', async () => {
//   await api
//     .get('/api/notes')
//     .expect(200)
//     .expect('Content-Type', /application\/json/)
// })

// afterAll(() => {
//   mongoose.connection.close()
// })
