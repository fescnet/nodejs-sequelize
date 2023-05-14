const { db } = require('../models')

const getOrganization = async (name = 'Organization Teste') => {
  return await db.Organization.create({ name })
}

async function getOrganizations() {
  const items = []
  for (let i = 0; i < arguments.length; i++) {
    items[i] = await getOrganization(arguments[i])
  }
  return items
}

module.exports = {
  getOrganization,
  getOrganizations,
}