import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './index.css'


export default class CreatePost extends Component {

    constructor (props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            shortDescription: ''
        }
    }

    handleTitleUpdate (ev) {
        this.setState({
            title: ev.target.value
        })
    }

    handleShortDescUpdate (ev) {
        this.setState({
            shortDescription: ev.target.value
        })
    }

    handleContentUpdate (ev) {
        this.setState({
            content: ev.target.value
        })
    }

    handleCreateClick () {
        const post = {
            title: this.state.title,
            body: this.state.content
        }

        console.log('creating new post', post)
    }

    render () {
        return (
            <div className="new-post-form">
                <div className="creative">
                    <h1>Create post</h1>

                    <input
                        onChange={this.handleTitleUpdate.bind(this)}
                        placeholder="title"
                        type="text"
                        value={this.state.title} />

                    <textarea
                        className="short-description"
                        placeholder="Short description of your post"
                        onChange={this.handleShortDescUpdate.bind(this)}
                        value={this.state.shortDescription}></textarea>

                    <textarea
                        placeholder="Your awesome content! :D, remember you can use markdown!"
                        onChange={this.handleContentUpdate.bind(this)}
                        value={this.state.content}></textarea>

                    <button onClick={this.handleCreateClick.bind(this)}>Create Post</button>
                </div>
                <div className="preview">
                    <h3>Preview</h3>
                    <h1>{this.state.title}</h1>
                    <ReactMarkdown source={this.state.content} />

                    <hr />

                    <h3>Your summary</h3>
                    <div>{this.state.shortDescription}</div>
                </div>
            </div>
        )
    }

}

