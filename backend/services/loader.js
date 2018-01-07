import UserService from './userservice'
import AuthService from './authservice'
import utils from './utils'
import serviceIndex from './index'

module.exports = app => {

  const authService = new AuthService()
  authService.secret = app.get('secret')
  authService.expiryTime = app.get('expiryTime')
  authService.expiryFactor = app.get('expiryFactor')


  const userService = new UserService()
  userService.authService = authService

  serviceIndex.userService = userService
  serviceIndex.authService = authService
  serviceIndex.utils = utils
}
