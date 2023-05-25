const { Dog, Feeding } = require('../models')

const create = async (req, res) => {
  try {
    const dog = await Dog.create(req.body)
    console.log(dog.toJSON())
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const dogs = await Dog.findAll({
      include: [{ model: Feeding, as: 'feedings' }]
    })
    res.status(200).json(dogs)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.dogId)
    dog.set(req.body)
    await dog.save()

    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteDog = async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.dogId)
    await dog.destroy()
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addFeeding = async (req, res) => {
  try {
    req.body.dogId = req.params.dogId
    const feeding = await Feeding.create(req.body)
    res.status(200).json(feeding)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteDog,
  addFeeding,
}