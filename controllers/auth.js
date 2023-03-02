const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// register
exports.register = async (req, res) => {
  try {
    // Check user
    const { username, email, password } = req.body;
    var user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User Already exists');
    }
    const salt = await bcrypt.genSalt(10);
    user = new User({
      username,
      email,
      password,
    });

    // Encrypt
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.send('Register Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check user exist in DB
    var user = await User.findOne({ email });
    if (user) {
      //   Check Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Password Invalid!');
      }
      // Payload
      const payload = {
        user: {
          id: user._id,
          role: user.role,
        },
      };
      // Generate Token
      jwt.sign(payload, jwtSecret, { expiresIn: '12h' }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      return res.status(400).send('User Not found!!');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

// current user
exports.currentUser = async (req, res) => {
  try {
   
    const user = await User.findOne({ _id: req.user.id })
      .select('-password')
      .exec();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};
