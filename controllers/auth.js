const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

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
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error!');
  }
};
