
/**
 * Creates a new comment into a specific post.
 * @param {Object} comment - The comment to be posted with {comment: String, author: String, date: Date}.
 * @param {String} postId - The post to which the comment will be related to.
 */
const postComment = (postId, comment) => {
  const res = new Promise((accept, reject) => {
    if (!postId) {
      return reject('Post should not be empty')
    }

    if (!comment || !comment.comment.trim() || !comment.author.trim()) {
      console.log('comment is not properly set')
      return reject('Comment is not properly set')
    }

    accept()
  })

  return res
}

export { postComment }
