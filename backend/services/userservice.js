import UserSchema from '../models/schemas/userschema'

class UserService {

  constructor () {
    this.authService = null
  }

  login (username, password) {
    return UserSchema
      .findOne({ username })
      .then(user => {
        if (!user) {
          throw 'User not found!'
        }

        return {
          user: {
            username: user.username,
            name: user.name,
            id: user.id
          },
          token: this.authService.encode(user)
        }
      })
  }

  createUser ({ username, name, password }) {
    const nuser = new UserSchema({
      username,
      name,
      password
    })

    return nuser.save()
      .then(created => {
        return created.id
      })
  }
}

export default UserService
