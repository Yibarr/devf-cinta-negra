import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    store: {
      type: String,
      default: 'La comer'
    },
    qnty: {
      type: Number,
      default: 25
    }
  }
}, { timestamps: true })

const Products = mongoose.model('Products', productSchema)

export default Products
