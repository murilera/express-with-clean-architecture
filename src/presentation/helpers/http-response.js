const MissingParamError = require('../helpers/missing-param-error')
const ServerError = require('../helpers/server-error')
const UnauthorizedError = require('../helpers/unauthorized-error')

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

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
}

module.exports = HttpReponse
