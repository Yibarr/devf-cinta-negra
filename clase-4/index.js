import './env.js'
import express from 'express'
import './mongoClient/index.js'
import errorHandler from './utils/errorHandler.js'
import ProductRouter from './routes/ProductRoutes.js'
import TicketRouter from './routes/TicketRoutes.js'
const api = express()
const PORT = process.env.PORT || 4000

api.use(express.json({ extended: true }))
api.use('/products', ProductRouter)
api.use('/tickets', TicketRouter)
api.use(errorHandler)

api.listen(PORT, ()=> console.log('Server initialized...'))









