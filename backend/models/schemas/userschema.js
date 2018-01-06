import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    index: true,
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
    type: date,
    default: Date.now,
    required: true
  }
})

UserSchema.pre('save', next => {
  this.lastEdition = Date.now()

  next()
})

export default mongoose.model('Users', UserSchema)
