const { Schema } = require('mongoose')

const Serie = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    },
    eps: {
      type: String,
      required: true
    },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Serie
