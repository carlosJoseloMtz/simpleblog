import { h, Component } from 'preact'
import style from './style'

export default class NewComment extends Component {
  state = {
    comment: '',
    author: ''
  }

  updateComment (ev) {
    this.setState({
      comment: ev.target.value
    })
  }

  updateAuhtor (ev) {
    this.setState({
      author: ev.target.value
    })
  }

  restartComment () {
    this.setState({
      comment: '',
      author: ''
    })
  }

  createComment (onCreateComment) {

    if (!this.state.comment.trim()) {
      this.restartComment()

      return
    }

    if (onCreateComment) {
      const newComment = {
        author: this.state.author,
        comment: this.state.comment,
        date: new Date()
      }

      onCreateComment(newComment)
    }

    this.restartComment()
  }

  render ({ onCreateComment }, { comment, author }) {
    return (
      <div class={style.new}>
        <input
          type="email"
          placeholder="Who are you? :o"
          onChange={this.updateAuhtor.bind(this)}
          value={author} />
        <textarea
          onChange={this.updateComment.bind(this)}
          placeholder="Leave a comment here!">
            {comment}
        </textarea>
        <button onClick={this.createComment.bind(this, onCreateComment)} class={style.btn}>Comment!</button>
      </div>
    )
  }
}
