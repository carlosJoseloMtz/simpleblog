import { postService, utils } from '../services'

module.exports = app => {
  app.post('/posts', (req, res) => {

    // TODO: get the user from the JWT being sent from the client
    const nPost = {
      title: req.body.title,
      summary: req.body.summary,
      post: req.body.content,
      user: '5a5173ad8822d75a7b44c562'
    }

    if (utils.isNullOrEmpty(nPost.title) ||
      utils.isNullOrEmpty(nPost.summary) ||
      utils.isNullOrEmpty(nPost.post)) {
        return res.status(400).json({
          error: true,
          message: 'invalid request'
        })
    }

    postService.createPost(nPost)
      .then(id => {
        res.json({
          id
        })
      })
      .catch(err => {
        console.error('error while trying to create the post', err)
        res.status(500).json({
          error: true,
          message: 'Error when trying to create the new post',
          trace: err
        })
      })
  })

  app.get('/posts/:id', (req, res) => {
    postService.findById(req.params.id)
      .then(post => {
        res.json(post)
      })
      .catch(err => {
        console.error('error while trying to get the post', err)

        res.status(500).json({
          error: true,
          message: 'Error while trying to get the post, it may not exist!'
        })
      })
  })
}
