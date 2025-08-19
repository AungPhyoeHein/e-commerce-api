const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "users",
    },
    page_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "pages",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

reportSchema.index({ page_id: 1 });

const Report = mongoose.model("reports", reportSchema);

module.exports = Report;
