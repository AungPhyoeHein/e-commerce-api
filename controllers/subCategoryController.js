const SubCategory = require("../models/sub_category.js");

const create = async (req, res, next) => {
  try {
    if (
      req.categoryId == null ||
      req.categoryId.length <= 0 ||
      req.subCategoryName == null ||
      req.subCategoryName.length <= 0
    ) {
      return res
        .status(400)
        .json({ msg: "Category && Sub Category Name Should not be null." });
    }
    const { categoryId, subCategoryName } = req.body;
    const sub_category = await SubCategory({ categoryId, subCategoryName });
    await sub_category.save();
    return res
      .status(201)
      .json({ msg: "Sub Category created Successful.", data: sub_category });
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    if (
      req.categoryId == null ||
      req.categoryId.length <= 0 ||
      req.subCategoryName == null ||
      req.subCategoryName.length <= 0
    ) {
      return res
        .status(400)
        .json({ msg: "Category && Sub Category Name Should not be null." });
    }
    const { categoryId, subCategoryName } = req.body;
    const sub_category = await SubCategory({ categoryId, subCategoryName });
    await sub_category.save();
    return res
      .status(201)
      .json({ msg: "Sub Category created Successful.", data: sub_category });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, get };
