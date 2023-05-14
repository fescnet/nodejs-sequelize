const { db } = require('../models')
const runAllSeeders = require('../seeders')

beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  await runAllSeeders()
})

beforeEach(async () => {
  await db.Organization.destroy({
    where: {},
    force: true
  })
})

afterAll(async () => {
})