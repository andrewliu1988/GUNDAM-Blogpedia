const { Schema } = require('mongoose')

const Suit = new Schema(
  {
    model: {
      type: String,
      required: true
    },
    weapons: {
      type: String,
      required: true
    },
    media_url: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    show_id: {
      type: Schema.Types.ObjectId,
      ref: 'shows'
    },
    show_name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Suit
