const { Pilot } = require('../models/index')

const getPilots = async (req, res) => {
  try {
    const pilots = await Pilot.find()
    return res.status(200).json({ pilots })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const getPilotById = async (req, res) => {
//   try {
//     const pilot = await Pilot.find({ show_id: '603d4fac78b2f5763a8a550f' })
//     return res.status(200).json({ pilot })
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const getPilotByShowId = async (req, res) => {
  try {
    console.log(req.params)
    const { showId } = req.params
    const pilot = await Pilot.find({ show_id: showId })
    return res.status(200).json({ pilot })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPilots,
  getPilotByShowId
}
