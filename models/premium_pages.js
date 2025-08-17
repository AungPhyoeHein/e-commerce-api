const mongoose = require("mongoose");

const memberTokenSchema = mongoose.Schema(
  {
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

const Category = mongoose.model("MemberToken", memberTokenSchema);

module.exports = Category;
