import jwt from 'jwt-simple'
import moment from 'moment'

class AuthService {

  constructor () {
    this.secret = null
    this.expirtyTime = null
    this.expiryFactor = null
  }

  encode ({ username, name }) {
    // TODO: for later support include the group so that we can actually
    // make some validations to the routes and not having only one

    // payload
    const payload = {
      sub: {
        username,
        name
      },
      iat: moment().unix(),
      exp: moment().add(
        this.expiryTime,
        this.expiryFactor)
      .unix()
    }

    return jwt.encode(payload, this.secret)
  }

  isTokenValid (token) {
    let payload = null

    try {
      payload = jwt.decode(token, this.secret)
    } catch (err) {
      console.error('Error while trying to decode validation token', err)
    }

    // check if the token has not expired, yet.
    return payload !== null && payload.exp <= moment().unix()
  }

}

export default AuthService
