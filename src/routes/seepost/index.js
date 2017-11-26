import { h, Component } from 'preact'
import style from './style'
import { getPostById } from '../../lib/postservice.js'
import {formatDate } from '../../lib/utils.js'
import Comments from '../../components/comments'

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
    return <div>
        <h1>{post.title}</h1>
        <div class={style.author}>
            <a href={'/profile/' + post.author.id}>{post.author.name}</a> - {post.postedAt}
        </div>
        <br />
        {post.content}
        <br />
        <hr />
        <br />
        <Comments postId={post.id} />
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

    return <div class={style.wrapper}>{content}</div>
  }
}
