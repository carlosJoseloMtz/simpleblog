import mongoose from 'mongoose'
import serviceLoader from '../services/loader'
import cors from 'cors'

module.exports = app => {

  const dbConn = app.get('dbConn')

  app.use(cors())

  mongoose.connect(dbConn)
  .then(_ => {
    console.log('Database  properly setup and connected!')
  }, err => {
    console.error('Error while trying to connect to the DB', err)
  })

  const port = app.get('port')

  app.listen(port, _ => {
    console.log(`Server's running on http://localhost:${port}`)
  })

  serviceLoader(app)
}
