const Router = require('express').Router()
const SuitController = require('../controllers/SuitController')

// routes go here

Router.post('/create', SuitController.createSuit)

Router.get('/', SuitController.getSuits)

Router.get('/:id', SuitController.getSuitById)

Router.post('/:id/pilot', SuitController.createPilot)

Router.get('/find/:show_id', SuitController.getSuitByShowId)

Router.delete('/delete/:id', SuitController.deleteSuit)

Router.put('/update/:id', SuitController.updateSuit)

module.exports = Router
