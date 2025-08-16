const express = require("express");
const categoryController = require("../controllers/categoryController.js");



const categoryRouter = express.Router();

categoryRouter.post("/", categoryController.create);
categoryRouter.get("/", categoryController.get);

module.exports = categoryRouter;
