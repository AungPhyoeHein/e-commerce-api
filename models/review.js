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

reviewSchema.index({page_id:1});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
