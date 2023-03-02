const express = require('express');
const router = express.Router();
// Controller
const { create, productList } = require('../controllers/product');
// Middleware
const { auth, adminCheck } = require('../middleware/auth');
const { upload } = require('../middleware/uploadFile');

//@Endpoint  http://localhost:5001/api/products
//@Method    POST
//@Access    Private
router.post('/products', upload, create);

//@Endpoint  http://localhost:5001/api/products
//@Method    GET
//@Access    Private
router.get('/products', productList);

module.exports = router;
