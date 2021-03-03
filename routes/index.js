const Router = require('express').Router()

//import individual router

const ShowRouter = require('./ShowRouter')
const SuitRouter = require('./SuitRouter')
const PilotRouter = require('./PilotRouter')
const CommentRouter = require('./CommentRouter')

//use the router and give them paths

Router.use('/show', ShowRouter)
Router.use('/suit', SuitRouter)
Router.use('/pilot', PilotRouter)
Router.use('/comment', CommentRouter)

//Any route in the individual router would be added onto these path

Router.get('/', (req, res) => res.send('This is root!'))

module.exports = Router
