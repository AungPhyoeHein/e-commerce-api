const express = require("express");
const {categoryController} = require("../controllers");



const categoryRouter = express.Router();

categoryRouter.post("/", categoryController.create);
categoryRouter.get("/", categoryController.get);

module.exports = categoryRouter;
