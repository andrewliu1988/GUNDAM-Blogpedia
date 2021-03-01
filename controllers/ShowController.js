const { Show, Suit } = require('../models/index')

const createShow = async (req, res) => {
  try {
    const show = await new Show(req.body)
    await show.save()
    return res.status(201).json({
      show
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

const getShowById = async (req, res) => {
  try {
    const show = await Show.findById(req.params.id)
    return res.status(200).json({ show })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createSuit = async (req, res) => {
  try {
    const suit = await new Suit({ ...req.body, show_id: req.params.id })
    await suit.save()
    return res.status(201).json({
      suit
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createShow,
  getShows,
  getShowById,
  createSuit
}
