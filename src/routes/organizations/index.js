const router = require('express').Router()
const list = require('./list-organizations')
const create = require('./create-organizations')
const update = require('./update-organizations')
const del = require('./delete-organizations')
const { PAGINATION_RULES, ORGANIZATION_CREATE_RULES, ORGANIZATION_UPDATE_RULES } = require('../../validation/rules')
const { validateRequest } = require('../../middlewares/validate-request')

router.get('/api/organizations', PAGINATION_RULES, validateRequest, list)
router.post('/api/organizations', ORGANIZATION_CREATE_RULES, validateRequest, create)
router.put('/api/organizations/:id', ORGANIZATION_UPDATE_RULES, validateRequest, update)
router.delete('/api/organizations/:id', del)

module.exports = {
  organizationsRouter: router
}