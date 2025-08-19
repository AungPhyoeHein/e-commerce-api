const mongoose = require("mongoose");

const premiumTokenSchema = mongoose.Schema(
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

const PremiumToken = mongoose.model("premiumtokens", premiumTokenSchema);

module.exports = PremiumToken;
