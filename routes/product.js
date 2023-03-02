const express = require('express');
const router = express.Router();
// Controller
const { create, productList } = require('../controllers/product');
// Middleware
const { auth, adminCheck } = require('../middleware/auth');

//@Endpoint  http://localhost:5001/api/products
//@Method    POST
//@Access    Private
router.post('/products', auth, adminCheck, create);

//@Endpoint  http://localhost:5001/api/products
//@Method    GET
//@Access    Private
router.get('/products', productList);

module.exports = router;
