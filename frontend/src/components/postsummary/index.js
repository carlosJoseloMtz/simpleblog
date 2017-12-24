import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const PostSummary = ({ id, author, date, title, summary }) => {
    return (
        <div className="post-summary">
            <Link to={`/post/${id}`}><h3>{ title }</h3></Link>
            <div className="author">
                <div>By <Link to={`/author/${author.id}`}>{ author.name }</Link></div>
                <div>at { date }</div>
            </div>
            <div className="summary">
                { summary } 
            </div>
        </div>
    )
}


export default PostSummary

