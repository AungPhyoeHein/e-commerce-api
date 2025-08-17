const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      enum:[1,2,3,4,5],
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
