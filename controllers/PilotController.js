const { Pilot } = require('../models/index')

const getPilots = async (req, res) => {
  try {
    const pilots = await Pilot.find()
    return res.status(200).json({ pilots })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPilotByShowId = async (req, res) => {
  try {
    const showId = req.params.show_id
    const pilot = await Pilot.find({ show_id: { $eq: showId } })
    return res.status(200).json({ pilot })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePilot = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Pilot.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Pilot deleted')
    }
    throw new Error('Pilot not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPilotById = async (req, res) => {
  try {
    const pilot = await Pilot.findById(req.params.id)
    return res.status(200).json({ pilot })
  } catch (error) {
    return res.status(500).send('Pilot not found')
  }
}

const updatePilot = async (req, res) => {
  try {
    const { id } = req.params
    await Pilot.findByIdAndUpdate(
      id,
      req.body,
      { new: true, upsert: true },
      (err, pilot) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!pilot) {
          res.status(500).send('Pilot not found')
        }
        return res.status(200).json(pilot)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPilots,
  getPilotByShowId,
  deletePilot,
  getPilotById,
  updatePilot
}
