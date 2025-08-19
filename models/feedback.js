const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "users",
    },
    rating: {
      type: String,
      enum: [1, 2, 3, 4, 5],
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

const Feedback = mongoose.model("feedbacks", reportSchema);

module.exports = Feedback;
