import express from 'express'
import Products from '../models/Products.js'
const router = express.Router()

import Tickets from '../models/Tickets.js'


router.post('/create', async (req, res, next) => {
  try {
    const { products } = req.body

    if(!products) throw new Error('No products in the request body')

    const productsList = await Products
      .find(
        { _id: { $in: products } }
      )
      
    const subtotal = productsList
      .reduce((acc, product) => {
        acc += product.price
        return acc
      }, 0)
    
    const newTicket = new Tickets(
      {
        subtotal: subtotal,
        products: products
      }
    )
      
    const ticket = await newTicket
      .save()
  
    res
      .status(201) 
      .json({
        message: 'Se ha creado un ticket',
        ticket: ticket
      })
  } catch (error) {
    next(error);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const tickets = await Tickets
      .findById(req.params.id)
      .populate('products')
    res.json({ message: 'Petición exitosa',  tickets: tickets }).status(201)
  } catch (error) {
    next(error)
  }  

})


export default router