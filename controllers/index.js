const series = require('../models/series')
const Show = require('../models/series')

const createShow = async (req, res) => {
  try {
    const show = await new Show(req.body)
    await show.save()
    return res.status(201).json({
      series
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getShows = async (req, res) => {
  try {
    const shows = await Show.find()
    return res.status(200).json({ shows })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createShow,
  getShows
}
