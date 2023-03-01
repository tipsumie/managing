const express = require('express');
const router = express.Router();

// Controller
const { register, login } = require('../controllers/auth');

//@Endpoint  http://localhost:5001/api/register
//@Method    POST
//@Access    Publish
router.post('/auth', register);

//@Endpoint  http://localhost:5000/api/login
//@Method    POST
//@Access    Publish
// router.post('/login', login);

module.exports = router;
