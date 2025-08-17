const express = require('express');

const {subCategoryController} = require("../controllers");

const subCategoryRouter = express.Router();

subCategoryRouter.post("/", subCategoryController.create);
subCategoryRouter.get("/", subCategoryController.get);

module.exports = subCategoryRouter;
