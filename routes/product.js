const express = require('express');
const router = express.Router();
// Controller
const { create, productList } = require('../controllers/product');
// Middleware
const { auth, adminCheck } = require('../middleware/auth');

//@Endpoint  http://localhost:5001/api/products
//@Method    POST
//@Access    Publish
router.post('/products', auth, adminCheck, create);

//@Endpoint  http://localhost:5001/api/product
//@Method    GET
//@Access    Publish
router.get('/product', productList);

module.exports = router;
