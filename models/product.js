const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    page_id: {
      type: String,
      required: true,
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
    discount_price: {
        type:Number,
    },
    colors: [
      {
        type: String,
      },
    ],

    size: [
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
