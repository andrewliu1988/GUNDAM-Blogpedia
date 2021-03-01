const { model } = require('mongoose')
const SuitSchema = require('./suit')
const PilotSchema = require('./pilot')
const CommentSchema = require('./comment')
const ShowSchema = require('./show')

const Suit = model('suits', SuitSchema)
const Pilot = model('pilots', PilotSchema)
const Comment = model('comments', CommentSchema)
const Show = model('shows', ShowSchema)

module.exports = {
  Show,
  Suit,
  Pilot,
  Comment
}
