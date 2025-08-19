const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "users",
    },
    cart_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "carts",
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

orderSchema.index({ user_id: 1 });

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
