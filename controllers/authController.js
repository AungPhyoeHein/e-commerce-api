// const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ msg: "user with same email is already exist" });
    } else {
      //Generate a salt with a cost factor of 10.
      const salt = await bcrypt.genSalt(10);
      //hash the password using the generateed salt
      const hashedPassword = await bcrypt.hash(password, salt);
      let user = await new User({ fullName, email, password: hashedPassword });
      user = await user.save();
      res.json({msg: 'Register Successful.'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const signIn = async (req, res) => {
  try {
    if(req.body.email == null || req.body.password == null || req.body.email.length < 1|| req.body.password.length < 1){
      return res.status(400).json({ msg: 'Email or Password should not be null.'});
    }
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ msg: "user not found with this email." });
    } else {
      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect Password" });
      } else {
        const token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY);
        const { password, ...userWithoutPassword } = findUser._doc;
        return res.json({token, ...userWithoutPassword});
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {
    signUp,
    signIn
}