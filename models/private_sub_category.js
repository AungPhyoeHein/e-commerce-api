const mongoose = require("mongoose");

const privateSubCategorySchema = mongoose.Schema({
  page_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "pages",
  },
  categoryId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "privatecategories",
  },
  subCategoryName: {
    type: String,
    required: true,
  },
});

const PrivateSubCategory = mongoose.model(
  "privatesubcategories",
  privateSubCategorySchema
);

module.exports = PrivateSubCategory;
