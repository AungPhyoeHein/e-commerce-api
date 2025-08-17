const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../configs/keys");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    jwt_secret,
    { expiresIn: "14d" }
  );

  return token;
};

module.exports = generateToken;
