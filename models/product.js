const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
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
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "categories",
    },

    subcategory: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "subcategories",
    },

    price: {
      type: Number,
      required: true,
    },
    discount_price: {
      type: Number,
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

productSchema.index({ tags: 1, category: 1, subcategory: 1, page_id: 1 });

const Product = mongoose.model("products", productSchema);

module.exports = Product;
