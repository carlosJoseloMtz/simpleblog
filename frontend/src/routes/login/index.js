import React, { Component } from 'react'
import './index.css'

export default class Login extends Component {

    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailInput (ev) {
        this.setState({
            email: ev.target.value
        })
    }

    handlePasswordInput (ev) {
        this.setState({
            password: ev.target.value
        })
    }

    handleLoginClick () {
        const credentials = {
            username: this.state.email,
            password: this.state.password
        }
        console.log('loging with the following credentials', credentials)
    }

    render () {
        return (
            <div className="login-form">

                <h3>Login</h3>

                <input
                    onChange={this.handleEmailInput.bind(this)}
                    placeholder="email@domain.com"
                    type="email"
                    value={this.state.email} />
                <input
                    onChange={this.handlePasswordInput.bind(this)}
                    placeholder="your strong password goes here! :)"
                    type="password"
                    value={this.state.password} />
                <button onClick={this.handleLoginClick.bind(this)}>Login</button>
            </div>
        )
    }

}

