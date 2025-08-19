const mongoose = require("mongoose");

const privateProductSchema = mongoose.Schema(
  {
    page_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "pages",
    },
    title: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: [
      {
        type: String,
      },
    ],
    colors: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

privateProductSchema.index({ page_id: 1 });

const PrivateProduct = mongoose.model("privateproducts", privateProductSchema);

module.exports = PrivateProduct;
