const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../configs/keys");

const authMiddleware = async (req, res, next) => {
  try {
    const authorization =
      req.headers.authorization && req.headers.authorization.split(" ");
    const token =
      authorization != undefined && authorization.length > 1
        ? authorization[1]
        : null;
    console.log(req.header);
    if (token) {
      const payload = jwt.verify(token, jwt_secret);
      if (payload) {
        req.user = {
          _id: payload._id,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        };
        next();
      } else {
        res.code = 401;
        throw new Error("Unauthorized");
      }
    } else {
      res.code = 400;
      throw new Error("Token is required");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;
