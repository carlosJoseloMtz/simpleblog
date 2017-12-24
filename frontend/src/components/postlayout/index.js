import React, { Component } from 'react'
import PostSummary from '../postsummary'
import './index.css'


export default class PostLayout extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }


    render () {
        return (
            <div className="post-layout">
                <PostSummary
                    id="someid"
                    author={{ id: "someotherid", name: "Carlos Arenas" } }
                    date="some date"
                    title="Why hybris sucks #1"
                    summary="A brief introduction of why hybris sucks so bad"
                    />
                <PostSummary
                    id="someid"
                    author={{ id: "someotherid", name: "Carlos Arenas" } }
                    date="some date"
                    title="Why hybris sucks #2"
                    summary="A brief introduction of why hybris sucks so bad"
                    />
                <PostSummary
                    id="someid"
                    author={{ id: "someotherid", name: "Carlos Arenas" } }
                    date="some date"
                    title="Why hybris sucks #3"
                    summary="A brief introduction of why hybris sucks so bad"
                    />
                <PostSummary
                    id="someid"
                    author={{ id: "someotherid", name: "Carlos Arenas" } }
                    date="some date"
                    title="Why hybris sucks #4"
                    summary="A brief introduction of why hybris sucks so bad"
                    />
            </div>
        )
    }

}
