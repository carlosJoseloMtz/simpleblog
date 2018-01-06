import UserService from './userservice'
import Utils from './utils'

/**
 * Basically, implement a pool of objects for an easy DI implementation.
 */
module.exports = {
  userService: new UserService(),
  utils: Utils
}
