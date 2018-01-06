import bodyParser from 'body-parser'
import mongoose from 'mongoose'

module.exports = app => {
  app.set('port', process.env.PORT || 3030)

  app.set('dbConn', process.env.dbConn || 'mongodb://localhost/simpleblogdb')

  app.set('json spaces', 2)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  mongoose.Promise = global.Promise

}
