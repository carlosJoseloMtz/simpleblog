import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from '../../components/message'
import { formatDate } from '../../lib/utils'
import ReactMarkdown from 'react-markdown'
import './index.css'

// services
import { getPost } from '../../lib/services/postservice'

export default class Post extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      error: false,
      errorMsg: '',
      post: null,
      loaded: false
    }
  }

  async componentWillMount () {
    getPost(this.state.id)
      .then(post => {
        console.log('post!', post)
        this.setState({
          error: false,
          post,
          loaded: true
        })
      })
      .catch(err => {
        console.error('Error while trying to get the post, may not even exist D:', err)
        this.setState({
          error: true,
          errorMsg: 'Something went wrong :('
        })
      })
  }

  renderPost () {
    if (this.state.error || !this.state.loaded) {
      return null
    }

    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <div className="author">
          <div>By <Link to={`/author/${this.state.post.user}`}>Carlos Martinez</Link></div>
          <div>Created at {formatDate(this.state.post.creationDate)}</div>
          <div>Last update at {formatDate(this.state.post.lastEdition)}</div>
        </div>
        <div className="content">
          <ReactMarkdown
            source={this.state.post.post}
          />
        </div>

        <hr />
      </div>
    )
  }

  render () {

    const errorMessage = this.state.error ?
      <Message
        type="error"
        message={this.state.errorMsg}
      /> : null

    return (
      <div className="post">
        { errorMessage }
        { this.renderPost() }
      </div>
    )
  }

}
