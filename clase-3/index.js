const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const api = express()
const PORT = process.env.PORT || 4000;

api.use(express.json({ extended: true }))

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(()=> console.log('DB connected'))
  .catch(() => console.log('Error connecting to db'))

//Models
const perroSchema = new mongoose.Schema({
  name: String,
  race: String,
  age: Number,
  owner: {
    type: String,
    required: true
  }
})

const Perros = mongoose.model('PerrosBonitos', perroSchema)

// Controllers
api.get('/', (req, res) => res.status(200).json({ message: 'Está vivooo!' }))

api.post('/api/v1/create/dog', (req, res) => {
  const { name, race, age, owner } = req.body

  const newDog = new Perros({
    name,
    race,
    age,
    owner
  })

  newDog.save()
    .then(resMongo => res.status(201).json(resMongo))
    .catch(err => res.status(400).json({ ...err, error: err.message }))
})

api.get('/api/v1/list/dog', (req, res) => {
  Perros.find()
    .then(resMongo => res.status(201).json(resMongo))
    .catch(err => res.status(400).json({ ...err, error: err.message }))
})

api.listen(PORT, () => {
  console.log(`Server initialized on port http://localhost:${PORT}/`)
} )