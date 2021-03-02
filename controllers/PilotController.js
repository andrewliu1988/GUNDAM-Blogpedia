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
    console.log(req.params.show_id)
    const showId = req.params.show_id
    const pilot = await Pilot.find({ show_id: { $eq: showId } })
    return res.status(200).json({ pilot })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPilots,
  getPilotByShowId
}
