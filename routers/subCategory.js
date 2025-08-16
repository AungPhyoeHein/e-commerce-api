const express = require('express');

const subCategoryRouter = express.Router();

subCategoryRouter.post("/", categoryController.create);
subCategoryRouter.get("/", categoryController.get);

module.exports = subCategoryRouter;
