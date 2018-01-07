import bodyParser from 'body-parser'
import mongoose from 'mongoose'

module.exports = app => {
  app.set('port', process.env.PORT || 3030)

  app.set('dbConn', process.env.DB_CONNECTION || 'mongodb://localhost/simpleblogdb')

  app.set('json spaces', 2)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  mongoose.Promise = global.Promise

  app.set('secret', process.env.AUTH_SECRET || 'yomamasofat')
  app.set('expirtyTime', process.env.TOKEN_EXPT || '24')
  app.set('expiryFactor', process.env.TOKEN_EXPF || 'hours')
}
