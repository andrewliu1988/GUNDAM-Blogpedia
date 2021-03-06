const { Suit, Pilot, Show } = require('../models/index')

const createSuit = async (req, res) => {
  try {
    const suit = await new Suit(req.body)
    await suit.save()
    return res.status(201).json({
      suit
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getSuits = async (req, res) => {
  try {
    const suits = await Suit.find()
    return res.status(200).json({ suits })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSuitById = async (req, res) => {
  try {
    const suit = await Suit.findById(req.params.id)
    return res.status(200).json({ suit })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSuitByShowId = async (req, res) => {
  try {
    const showId = req.params.show_id
    const suit = await Suit.find({ show_id: { $eq: showId } })
    return res.status(200).json({ suit })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPilot = async (req, res) => {
  try {
    const suit = await Suit.findById(req.params.id)
    const pilot = await new Pilot({
      ...req.body,
      suit_id: req.params.id,
      show_id: suit.show_id
    })
    await pilot.save()
    return res.status(201).json({
      pilot
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteSuit = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Suit.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Suit deleted')
    }
    throw new Error('Suit not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateSuit = async (req, res) => {
  try {
    const { id } = req.params
    await Suit.findByIdAndUpdate(
      id,
      req.body,
      { new: true, upsert: true },
      (err, suit) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!suit) {
          res.status(500).send('Suit not found')
        }
        return res.status(200).json(suit)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createSuit,
  getSuits,
  getSuitById,
  createPilot,
  getSuitByShowId,
  deleteSuit,
  updateSuit
}
