import UserService from './userservice'
import AuthService from './authservice'
import PostService from './postservice'
import utils from './utils'
import serviceIndex from './index'

module.exports = app => {

  const authService = new AuthService()
  authService.secret = app.get('secret')
  authService.expiryTime = app.get('expiryTime')
  authService.expiryFactor = app.get('expiryFactor')


  const userService = new UserService()
  userService.authService = authService

  const postService = new PostService()

  serviceIndex.userService = userService
  serviceIndex.postService = postService
  serviceIndex.authService = authService
  serviceIndex.utils = utils

}
