const express = require("express");
const {bannerController} = require("../controllers");



const bannerRouter = express.Router();

bannerRouter.post("/", bannerController.create);
bannerRouter.get("/", bannerController.get);

module.exports = bannerRouter;
