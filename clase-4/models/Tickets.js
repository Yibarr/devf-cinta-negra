const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  subtotal: {
    type: Number,
    default: 0 
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  }]
}, { timestamps: true })

const Tickets = mongoose.model('Tickets', ticketSchema)

module.exports = Tickets