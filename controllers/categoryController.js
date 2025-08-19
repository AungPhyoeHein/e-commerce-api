const Category = require("../models/category.js");

const create = async (req, res, next) => {
  try {
    if (req.name == null || req.name.length <= 0) {
      res.code = 400;
      throw new Error("Name required.");
    }
    if (req.image == null || req.image.length <= 0) {
      res.code = 400;
      throw new Error("Image required.");
    }
    if (req.banner == null || req.banner.length <= 0) {
      res.code = 400;
      throw new Error("Banner required.");
    }
    const { name, image, banner } = req.body;
    const category = await Category({ name, image, banner });
    await category.save();
    return res
      .status(201)
      .json({ msg: "Category created Successful.", data: category });
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ msg: "Category got Successful.", data: category });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, get };
