const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Comment: {
      type: String,
      required: true
    },
    media_url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Comment
