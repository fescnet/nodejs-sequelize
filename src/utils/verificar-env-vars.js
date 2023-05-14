const { EnvVarNotFoundError } = require('../errors/env-var-not-found-error')

const verificarEnvVars = (configs) => {
  const requiredEnvVars = {
    PORT: configs.PORT,
    ENV:configs.ENV,
    DB_INFO:configs.DB_INFO,
  }

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if(!value){
      throw new EnvVarNotFoundError(`A variavel de ambiente ${key} nao foi definida no servidor.`)
    }
  }
}

module.exports = {
  verificarEnvVars
}

