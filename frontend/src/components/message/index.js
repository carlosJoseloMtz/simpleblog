import React from 'react'
import './index.css'

const Message = ({ message, type }) => (
  <div className={`alert ${type}`}>
    {message}
  </div>
)

export default Message
