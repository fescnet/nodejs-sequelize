const { verificarEnvVars } = require('../../../utils/verificar-env-vars')

describe('a funcao que valida as variaveis de ambiente...', () => {
  test('emite exception se faltar alguma variavel de ambiente obrigatoria no setup', () => {
    const fakeConfigs = {
      PORT: undefined,
    }
    const func = () => {
      verificarEnvVars(fakeConfigs)
    }
    expect(func).toThrow(Error)
  })
  test('emite uma msg explicativa se faltar alguma var', () => {
    const fakeConfigs = {
      PORT: undefined,
    }
    const func = () => {
      verificarEnvVars(fakeConfigs)
    }
    expect(func).toThrow('A variavel de ambiente PORT nao foi definida no servidor.')
  })
})

//
