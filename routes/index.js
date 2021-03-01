const { Router } = require('express')
const showControllers = require('../controllers/index')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/createShow', showControllers.createShow)
router.get('/getAllShows', showControllers.getShows)

module.exports = router
