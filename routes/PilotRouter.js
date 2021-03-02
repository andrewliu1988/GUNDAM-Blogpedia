const Router = require('express').Router()
const PilotController = require('../controllers/PilotController')

Router.get('/', PilotController.getPilots)

Router.get('/find/:show_id', PilotController.getPilotByShowId)

module.exports = Router
