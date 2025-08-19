const mongoose = require("mongoose");

const privateCategorySchema = mongoose.Schema(
  {
    page_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "pages",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PrivateCategory = mongoose.model(
  "privatecategories",
  privateCategorySchema
);

module.exports = PrivateCategory;
