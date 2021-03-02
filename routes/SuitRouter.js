const Router = require('express').Router()
const SuitController = require('../controllers/SuitController')

// routes go here

Router.post('/', SuitController.createSuit)
Router.get('/', SuitController.getSuits)
Router.get('/:id', SuitController.getSuitById)
Router.post('/:id/pilot', SuitController.createPilot)

module.exports = Router
