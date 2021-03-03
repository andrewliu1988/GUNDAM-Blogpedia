const Router = require('express').Router()
const PilotController = require('../controllers/PilotController')

Router.get('/', PilotController.getPilots)

Router.get('/find/:show_id', PilotController.getPilotByShowId)

Router.delete('/delete/:id', PilotController.deletePilot)

module.exports = Router
