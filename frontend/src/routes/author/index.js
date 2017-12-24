import React, { Component } from 'react'
import PostList from '../../components/postlist'

export default class Author extends Component {

    constructor (props) {
        super(props)
        this.state = {
            posts: [{ title: 'some title', id: 'somerandomid1' },
                { title: 'some title', id: 'somerandomid2' },],
            author: { id: props.match.params.id }
       }

        console.log('author is', this.state.author)
    }

    componentWillMount () {
        // TODO: request the information of the author
        this.setState({
            author: {
                name: 'Carlos Martinez',
                id: this.state.author.id,
                totalPosts: 10
            }
        })
    }

    render () {
        return (
            <div>
                <h1>{ this.state.author.name }</h1>
                <hr />
                Previous posts of the author
                <PostList
                    posts={this.state.posts}
                />
                <div>Total Posts by the author: {this.state.author.totalPosts}</div>
            </div>
        )
    }

}

