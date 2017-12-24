import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const PostList = ({ posts }) => {

    const domPosts = posts.map(post => {
        return <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    })

    return (
        <div className="post-list">
            <ul>{domPosts}</ul>
        </div>
    )
}

export default PostList

