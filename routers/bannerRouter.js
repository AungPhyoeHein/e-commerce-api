const express = require("express");
const {bannerController} = require("../controllers");
const authMiddleware = require("../middlewares/authMiddleware");



const bannerRouter = express.Router();

bannerRouter.post("/",authMiddleware, bannerController.create);
bannerRouter.get("/", bannerController.get);

module.exports = bannerRouter;
