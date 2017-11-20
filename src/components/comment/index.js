import { h, Component } from 'preact'
import style from './style'
import { formatDate } from '../../lib/utils.js'


const Comment = ({comment}) => {
  return (
    <div class={style.comment}>
      <div class={style.author}>
        {comment.author} - {formatDate(comment.date)}
      </div>
      <br />
      {comment.comment}
    </div>
  )
}

export default Comment
