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
    mecha: {
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
    }
  },
  { timestamps: true }
)

module.exports = Pilot
