const express = require('express')
const router = express.Router()

const Tickets = require('../models/Tickets.js')


router.post('/tickets', async (req, res) => {
  try {
    const newTicket = new Tickets(req.body)
    const savedDoc = await newTicket
      .save()
    res.send({ 'message': 'Se ha creado un ticket', doc: savedDoc }).status(201) 
  } catch (error) {
    res.send({ 'message': error }).status(400) 
  }
})

router.get('/tickets/:id', async (req, res) => {
  try {
    const tickets = await Tickets
      .findById(req.params.id)
      .populate('products')
    res.json({ message: 'Petición exitosa',  tickets: tickets }).status(201)
  } catch (error) {
    res.json({message: error.message}).status(400)
  }  

})


module.exports = router