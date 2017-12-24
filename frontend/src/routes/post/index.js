import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Post extends Component {

    constructor (props) {
        super(props)
        this.state = {
            id: props.match.params.id
        }

        console.log(this.state)
    }

    render () {
        return (
            <div className="post">
                <h1>Why hybris sucks #1</h1>
                <div className="author">
                    <div>By <Link to="/author/someotherid">Carlos Martinez</Link></div>
                    <div>at 23 Dec 2017</div>
                </div>
                <div className="content">
                    this is a post! :)
                </div>
                <hr />
                comments will be here!
            </div>
        )
    }

}

