const Category = require("../models/category.js");

const create = async (req, res) => {
  try {
    if (
      req.name == null ||
      req.name.length <= 0 ||
      req.image == null ||
      req.image.length <= 0 ||
      req.banner == null ||
      req.banner.length <= 0
    ) {
      return res.status(400).json({ msg: 'Name,Image and Banner should not be empty.' });
    }
    const {name,image,banner} = req.body;
    const category = await Category({name,image,banner});
    await category.save();
    return res.status(200).json({msg:'Category created Successful.',data: category})
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const get = async(req,res) => {
    try {
        const category = await Category.find({});
        res.status(200).json({msg: 'Category got Successful.',data: category})
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {create,get}