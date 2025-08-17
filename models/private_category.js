const mongoose = require("mongoose");

const privateCategorySchema = mongoose.Schema(
  {
    page_id: {
      type: String,
      required: true,
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
  "PrivateCategory",
  privateCategorySchema
);

module.exports = PrivateCategory;
