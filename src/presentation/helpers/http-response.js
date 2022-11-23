const MissingParamError = require('../helpers/missing-param-error')
const ServerError = require('../helpers/server-error')

class HttpReponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }
}

module.exports = HttpReponse
