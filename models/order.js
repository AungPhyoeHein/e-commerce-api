const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    cart_id: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      enum: [1, 2],
      default: 1,
    },
    products: [
      {
        id: { type: String, required: true },
        cupon_id: {
          type: String,
        },
      },
    ],
    total_price: {
      type: Number,
      required: true,
    },
    discount_price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
