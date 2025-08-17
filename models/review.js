const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    page_id: {
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

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
