import { h, Component } from 'preact'
import style from './style'
import { getPostById } from '../../lib/postservice.js'

export default class SeePost extends Component {
  state = {
    post: null,
    error: false,
    notFound: false
  }

  componentWillMount () {
    getPostById(this.props.postId)
      .then(post => {
        this.setState({
          post
        })
      })
      .catch(err => {
        this.setState({
          error: true
        })
      })
  }

  getError () {
    return <div>
        <h1>Oops something went wrong</h1>
        <p>Refresh the page!</p>
      </div>
  }

  getPostContent (post) {
    console.log(post)
    return <div>
        <h1>{post.title}</h1>
        <br />
        {post.content}
        <br />
        {post.author.name}
      </div>
  }

  render ({ postId }, { post, error }) {
    if (!post && !error) {
      return null
    }

    let content = null

    if (error) {
      content = this.getError()
    } else {
      content = this.getPostContent(post)
    }

    return content
  }
}
