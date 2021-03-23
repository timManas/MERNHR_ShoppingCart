import express from 'express'
import Product from './productModel.js'
import asyncHandler from 'express-async-handler'

// Create Router
const router = express.Router()

// Route for fetching all products
router.route('/').get(
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.route('/:id').get(
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })
    console.log('Product: ' + product)
    if (product) {
      res.status(200)
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Produt not found')
    }
  })
)

// Export Router
export default router
