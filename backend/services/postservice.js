import PostSchema from '../models/schemas/postschema'
import { mapId } from './mappers/objectmapper'

class PostService {

  createPost ({ title, summary, post, user }) {
    const newPost = new PostSchema({
      title,
      summary,
      post,
      user
    })

    return newPost.save()
        .then(post => {
          return mapId(post)
        })
  }

  findById (id) {
    return PostSchema.findById(id)
        .then(post => {
          if (!post) {
            throw 'Post not found!'
          }

          return post
        })
  }

}

export default PostService
