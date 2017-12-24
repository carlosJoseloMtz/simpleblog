import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = _ => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/'>Home</Link> 
                </li>
            </ul>
        </header>
    )
}

export default Header

