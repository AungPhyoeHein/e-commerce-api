const Banner = require("../models/banner.js");

const create = async (req, res, next) => {
  try {
    if (req.link == null || req.link.length <= 0) {
      res.code = 400;
      throw new Error("Image required.");
    }

    if (req.image == null || req.link.image <= 0) {
      res.code = 400;
      throw new Error("Link required.");
    }
    const { link, image } = req.body;
    const banner = await new Banner({ link, image });
    await banner.save();
    res.status(201).json({ msg: "New Banner create Successful." });
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const banner = await Banner.find({});
    res.status(200).json({ msg: "Banner got Successful.", data: banner });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, get };
