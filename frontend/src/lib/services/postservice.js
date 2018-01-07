import { get } from '../http'
import { postsApi } from '../constants'

const fetchHomePosts = page => {
  return get({
      url: `${postsApi}/index/${page || 1}`
    })
}

const getPost = postId => {
  return get({
      url: `${postsApi}/${postId}`
    })
}

export { fetchHomePosts, getPost }
