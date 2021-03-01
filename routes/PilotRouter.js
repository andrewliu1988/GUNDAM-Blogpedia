const Router = require('express').Router()
const PilotController = require('../controllers/PilotController')

Router.get('/', PilotController.getPilots)
Router.get('/shows', PilotController.getPilotById)

module.exports = Router
