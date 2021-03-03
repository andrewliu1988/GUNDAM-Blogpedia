const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post('/', CommentController.createComment)

Router.get('/get', CommentController.getComment)

module.exports = Router
