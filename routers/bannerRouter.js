const express = require("express");
const {bannerController} = require("../controllers");
const authMiddleware = require("../middlewares/authMiddleware");



const bannerRouter = express.Router();

bannerRouter.post("/", bannerController.create);
bannerRouter.get("/",authMiddleware, bannerController.get);

module.exports = bannerRouter;
