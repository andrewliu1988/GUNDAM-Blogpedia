const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    comment: {
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
