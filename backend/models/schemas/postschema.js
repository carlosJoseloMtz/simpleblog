import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },

  title: {
    type: String,
    required: true,
    index: true
  },

  summary: {
    type: String,
    required: true
  },

  post: {
    type: String,
    required: true
  },

  lastEdition: {
    type: Date,
    default: Date.now,
    required: true
  },

  creationDate: {
    type: Date,
    default: Date.now,
    required: true
  },

  tags: [{ name: String }]
})

PostSchema.pre('save', function (next) {
  this.lastEdition = Date.now()

  next()
})

export default mongoose.model('Posts', PostSchema)
