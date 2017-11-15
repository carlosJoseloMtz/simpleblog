import { h, Component } from 'preact'
import style from './style'


const Comment = ({comment}) => {
  return (
    <div class={style.comment}>
      {comment.author}
      <br />
      <br />
      {comment.comment}
    </div>
  )
}

export default Comment
