import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    index: true,
    required: true
  },

  group: {
    type: String,
    enum: ['admin', 'author', 'subscriptor'],
    default: 'author',
    required: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  creationDate: {
    type: Date,
    default: Date.now,
    required: true
  },

  lastEdition: {
    type: Date,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  this.lastEdition = Date.now()

  next()
})

export default mongoose.model('Users', UserSchema)
