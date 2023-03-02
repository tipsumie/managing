const express = require('express');
const router = express.Router();
// Controller
const {
  createProduct,
  productList,
  productById,
  deleteProduct,
  updateProduct,
} = require('../controllers/product');
// Middleware
const { auth, adminCheck } = require('../middleware/auth');
const { upload } = require('../middleware/uploadFile');

//@Endpoint  http://localhost:5001/api/product
//@Method    POST
//@Access    Private
router.post('/product', upload, createProduct);

//@Endpoint  http://localhost:5001/api/products
//@Method    GET
//@Access    Private
router.get('/products', productList);

//@Endpoint  http://localhost:5001/api/products/:id
//@Method    GET
//@Access    Private
router.get('/products/:id', productById);

//@Endpoint  http://localhost:5001/api/product/:id
//@Method    DELETE
//@Access    Private
router.delete('/product/:id', deleteProduct);

//@Endpoint  http://localhost:5001/api/product/:id
//@Method    UPDATE
//@Access    Private
router.patch('/product/:id', updateProduct);

module.exports = router;
