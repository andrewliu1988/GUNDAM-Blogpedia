const Router = require('express').Router()
const PilotController = require('../controllers/PilotController')

Router.get('/', PilotController.getPilots)

Router.get('/get/:id', PilotController.getPilotById)

Router.get('/find/:show_id', PilotController.getPilotByShowId)

Router.delete('/delete/:id', PilotController.deletePilot)

Router.put('/update/:id', PilotController.updatePilot)

module.exports = Router
