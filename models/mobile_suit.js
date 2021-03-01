const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mobile_suit = new Schema(
  {
    model: {
      type: String,
      required: true
    },
    pilot: {
      type: Schema.Types.ObjectId,
      ref: 'pilot_id'
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
    series_id: {
      type: Schema.Types.ObjectId,
      ref: 'series_id'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('mobileSuits', Mobile_suit)
