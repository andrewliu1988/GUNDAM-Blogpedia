const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    mobile_suit: {
      type: Schema.Types.ObjectId,
      ref: 'mobileSuit_id'
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

module.exports = mongoose.model('pilots', Pilot)
