const mongoose = require("mongoose");

const premiumTokenSchema = mongoose.Schema(
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

const PremiumToken = mongoose.model("PremiumToken", premiumTokenSchema);

module.exports = PremiumToken;
