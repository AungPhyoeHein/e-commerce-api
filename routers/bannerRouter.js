const express = require("express");
const {bannerController} = require("../controllers");
const {authMiddleware,isAdmin} = require("../middlewares");



const bannerRouter = express.Router();

bannerRouter.post("/",authMiddleware,isAdmin, bannerController.create);
bannerRouter.get("/", bannerController.get);

module.exports = bannerRouter;
