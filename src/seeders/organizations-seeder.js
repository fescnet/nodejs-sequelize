const { db } = require('../models')
module.exports = async () => {
  await db.Organization.create({ name: 'Org 01' })
  await db.Organization.create({ name: 'Org 02' })
  await db.Organization.create({ name: 'Org 03' })
}