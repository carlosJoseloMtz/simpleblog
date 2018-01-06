
module.exports = app => {
  app.get('/test', (req, res) => {
    res.json({
      msg: 'this is a nice message :)'
    })
  })
}
