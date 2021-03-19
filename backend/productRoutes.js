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

// Export Router
export default router
