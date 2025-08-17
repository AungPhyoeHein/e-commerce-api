const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    page_id: {
      type: String,
      required: true,
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

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
