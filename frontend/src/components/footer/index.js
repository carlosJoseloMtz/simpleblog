import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Footer = _ => {
    return (
        <footer>
            <p>
                Welcome to this awesome blog which is built with pure love <span aria-label="heart" role="img">💚</span>
            </p>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

