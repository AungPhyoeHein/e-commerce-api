const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    status: {
      type: Number,
      enum: [1, 2],
      default: 1,
    },
    products: [
      {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
    ],
    total_price: {
      type: Number,
      required: true,
    },
    discount_price: {
        type:Number,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
