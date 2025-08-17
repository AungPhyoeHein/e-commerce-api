// const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const hashPassword = require("../utils/hashPassword.js");
const generateToken = require("../utils/generateToken.js");
const comparePassword = require("../utils/comparePassword.js");

const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.code=400;
      throw new Error("Email already exist.");
    } else {
      const hashedPassword = await hashPassword(password);
      let user =  new User({ name, email, password: hashedPassword });
      user = await user.save();
      res
        .status(201)
        .json({ code: 201, status: true, msg: "Register Successful." });
    }
  } catch (err) {
    next(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.code=400;
      throw new Error("Email required");
    }
    if (!password) {
      res.code=400;
      throw new Error("Password required");
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ msg: "user not found with this email." });
    } else {
      const isMatch = await comparePassword(password,findUser.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect Password" });
      } else {
        const token = generateToken(findUser);
        const { password, ...userWithoutPassword } = findUser._doc;
        return res.status(200).json({
          code: 200,
          status: true,
          user: { ...userWithoutPassword, token },
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

const verifyCode=async(req,res,next)=>{
  try {
    
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signUp,
  signIn,
  verifyCode
};
