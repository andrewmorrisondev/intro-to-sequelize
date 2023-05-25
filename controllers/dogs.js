const { Dog, Feeding, Toy, DogToy } = require('../models')

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
      include: [
        { model: Feeding, as: 'feedings' },
        { model: Toy, as: "toys", through: { attributes: [] } }
      ]
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

const associateToy = async (req, res) => {
  try {
    const { dogId, toyId } = req.params
    const association = await DogToy.create({
      dogId: dogId, toyId: toyId
    })
    res.status(200).json(association)
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
  associateToy,
}