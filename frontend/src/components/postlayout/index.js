import React, { Component } from 'react'
import PostSummary from '../postsummary'
import './index.css'

// services
import { fetchHomePosts } from '../../lib/services/postservice'


export default class PostLayout extends Component {

    constructor (props) {
        super(props)
        this.state = {
          page: 1,
          totalPages: 0,
          error: false,
          posts: []
        }
    }

    async componentWillMount () {
      fetchHomePosts(this.state.page)
        .then(paginatedPosts => {
          console.log(paginatedPosts)
          this.setState({
            totalPages: paginatedPosts.pages,
            posts: paginatedPosts.docs,
            error: false
          })
        })
        .catch(err => {
          console.error('could not fetch the posts', err)
          this.setState({
            error: true
          })
        })
    }


    render () {
      const errorMessage = this.state.error ? <div>There was an error! :(</div> : null
      return (
          <div className="post-layout">
            {errorMessage}
            {
              this.state.posts.map(post => {
                return <PostSummary
                    key={post._id}
                    id={post._id}
                    author={{ id: post.user, name: "Carlos Arenas" } }
                    date={post.creationDate}
                    title={post.title}
                    summary={post.summary}
                  />
              })
            }
          </div>
      )
    }

}
