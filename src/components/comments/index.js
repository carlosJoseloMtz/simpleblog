import { h, Component } from 'preact'
import style from './style'
import NewComment from '../newcomment'
import Comment from '../comment'
import { postComment } from '../../lib/commentservice.js'

const COMMENTS = [
  {
    author: 'Someone',
    comment: 'some comment very nice'
  },
  {
    author: 'Someone',
    comment: 'some comment very nice'
  },
  {
    author: 'Someone',
    comment: 'some comment very nice'
  },
  {
    author: 'Someone',
    comment: 'some comment very nice'
  },
  {
    author: 'Someone',
    comment: 'some comment very nice'
  }
]

export default class Comments extends Component {
  state = {
    comments: COMMENTS
  }

  createComment (comment) {
    postComment(this.props.postId, comment)
      .then(_ => {
        const previousList = this.state.comments

        previousList.unshift(comment)

        this.setState({
          comments: previousList
        })
      })
      .catch(err => {
        console.error('error while trying to create the comment', err)
      })
  }

  render ({ postId }, { comments }) {
    return (
      <div class={style.commentsection}>
        <NewComment onCreateComment={this.createComment.bind(this)} />
        <br />
        <div>
          {
            comments.map(comment => {
              return <Comment comment={comment} />
            })
          }
        </div>
      </div>
    )
  }
}
