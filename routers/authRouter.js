const express = require("express");
const { authController } = require("../controllers");
const { signupValidator } = require("../validators/auth.js");
const validate = require("../validators/validate.js");




const router = express.Router();

router.post("/signup",signupValidator,validate, authController.signUp);
router.post("/signin", authController.signIn);
router.post("send-verification-email",authController.verifyCode);

module.exports = router;
