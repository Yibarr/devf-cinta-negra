import express from 'express'
const router = express.Router()

import Products from '../models/Products.js'

router.post('/create', async (req, res, next) => {
  try {
    const { name, price, stock } = req.body
    const criteria = await Products.exists({ name: name })
    if (!criteria) {
      const productToSave = new Products(
        {
          name,
          price,
          stock
        }
      )
      const savedDoc = await productToSave.save()
      res.send({ message: 'Document created', doc: savedDoc }).status(201)
    } else {
      throw new Error('Ya existe ese product')
    }
    res.send({ message: error.message, body: req.body }).status(201)
  } catch (error) {
    next(error)
  }
})






export default router