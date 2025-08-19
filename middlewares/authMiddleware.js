const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../configs/keys");

const authMiddleware=(req,res,next)=>{
    next();
}

module.exports = authMiddleware;