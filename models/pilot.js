const { Schema } = require('mongoose')

const Pilot = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    suit_id: {
      type: Schema.Types.ObjectId,
      ref: 'suits'
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
    }
  },
  { timestamps: true }
)

module.exports = Pilot
