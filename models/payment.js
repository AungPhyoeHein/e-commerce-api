const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
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

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
