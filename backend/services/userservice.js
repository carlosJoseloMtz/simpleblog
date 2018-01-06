import UserSchema from '../models/schemas/userschema'

class UserService {

  login (username, password) {
    return UserSchema
      .findOne({ username })
      .then(user => {
        if (!user) {
          throw 'User not found!'
        }

        // TODO: remove password from response
        return user
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
