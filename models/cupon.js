const mongoose = require("mongoose");

const cuponSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    page_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "pages",
    },
    exprie_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cupon = mongoose.model("cupons", cuponSchema);

module.exports = Cupon;
