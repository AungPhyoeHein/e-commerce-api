const mongoose = require("mongoose");

const cuponSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    page_id: {
      type: String,
      required: true,
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

const Cupon = mongoose.model("Cupon", cuponSchema);

module.exports = Cupon;
