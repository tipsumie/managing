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
router.post('/product', auth, adminCheck, upload, createProduct);

//@Endpoint  http://localhost:5001/api/products
//@Method    GET
//@Access    Private
router.get('/products', auth, productList);

//@Endpoint  http://localhost:5001/api/products/:id
//@Method    GET
//@Access    Private
router.get('/products/:id', auth, productById);

//@Endpoint  http://localhost:5001/api/product/:id
//@Method    DELETE
//@Access    Private
router.delete('/product/:id', auth,adminCheck, deleteProduct);

//@Endpoint  http://localhost:5001/api/product/:id
//@Method    UPDATE
//@Access    Private
router.patch('/product/:id', auth, adminCheck, upload, updateProduct);

module.exports = router;
