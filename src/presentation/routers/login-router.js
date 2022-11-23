const HttpReponse = require('../helpers/http-response')

class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) return HttpReponse.serverError()

    const { email, password } = httpRequest.body
    if (!email) {
      return HttpReponse.badRequest('email')
    }
    if (!password) {
      return HttpReponse.badRequest('password')
    }
  }
}

module.exports = LoginRouter
