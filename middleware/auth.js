const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const AUTHORIZATION_HEADER = 'authtoken';
const JWT_SECRET = process.env.JWT_SECRET;

exports.auth = (req, res, next) => {
  try {
    const authHeader = req.headers[AUTHORIZATION_HEADER];
    if (!authHeader) {
      return res.status(401).send('Authorization header not found');
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      return res.status(401).send('Invalid authorization format');
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send('Unauthorized');
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    console.log('TEST', req);
    const { id } = req.user;
    const adminUser = await User.findOne({ _id: id }).exec();
    if (adminUser.role !== 'admin') {
      res.status(403).send(err, 'Admin Access denied');
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).send('Token Invalid!');
  }
};
