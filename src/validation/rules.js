const { body, query } = require('express-validator')

//TODO: rever todas as regras de validação.  Adicionar sanitize.

const rules = {
  PAGINATION_RULES: [
    query('page').isInt().optional().toInt().withMessage('PAGE_MUST_BE_INT'),
    query('pageSize').isInt().optional().toInt().withMessage('PAGE_SIZE_MUST_BE_INT'),
  ],
  ORGANIZATION_CREATE_RULES: [
    body('name').not().isEmpty().withMessage('NOME_NOT_EMPTY'),
  ],
  ORGANIZATION_UPDATE_RULES: [
    body('name').not().isEmpty().withMessage('NOME_NOT_EMPTY'),
  ],
}
module.exports = rules