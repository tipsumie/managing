const express = require('express');
const router = express.Router();
// Controller
const { register, login, currentUser } = require('../controllers/auth');
// Middleware
const { auth } = require('../middleware/auth');

//@Endpoint  http://localhost:5001/api/register
//@Method    POST
//@Access    Publish
router.post('/register', register);

//@Endpoint  http://localhost:5001/api/login
//@Method    POST
//@Access    Publish
router.post('/login', login);

//@Endpoint  http://localhost:5001/api/current-user
//@Method    GET
//@Access    Private
router.get('/current-user', auth, currentUser);

module.exports = router;
