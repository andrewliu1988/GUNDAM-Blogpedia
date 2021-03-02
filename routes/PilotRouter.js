const Router = require('express').Router()
const PilotController = require('../controllers/PilotController')

Router.get('/sort/:show_id', PilotController.getPilotByShowId)
Router.get('/', PilotController.getPilots)

module.exports = Router
