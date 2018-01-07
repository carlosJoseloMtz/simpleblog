import { userService, utils } from '../services'

module.exports = app => {

  app.post('/users', (req, res) => {

    if (utils.isNullOrEmpty(req.body.username) ||
      utils.isNullOrEmpty(req.body.password) ||
      utils.isNullOrEmpty(req.body.repeatedPassword) ||
      utils.isNullOrEmpty(req.body.name) ||
      req.body.repeatedPassword !== req.body.password) {
      return res.status(400).json({
        error: true,
        message: 'Invalid request!'
      })
    }

    userService.createUser({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name
    })
    .then(id => {
      res.json({
        id
      })
    })
    .catch(err => {
      console.error('Error while trying to create the user? D:', err)
      res.status(500).json({
        error: true,
        message: 'error while trying to create the user',
        trace: err
      })
    })
  })

  app.post('/login', (req, res) => {

    // quick validation
    if (utils.isNullOrEmpty(req.body.username) ||
      utils.isNullOrEmpty(req.body.password)) {
        return res.status(400).json({
          error: true,
          message: 'invalid parameters'
        })
    }

    // login the user
    userService.login(req.body.username, req.body.password)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        console.error('Error while trying to login', err)

        res.status(500).json({
          error: true,
          message: 'Error while trying to login',
          trace: err
        })
      })
  })
}
