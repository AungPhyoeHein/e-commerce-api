const mogoose = require("mongoose");

const pageBannerSchema = mogoose.Schema(
  {
    page_id: {
      type: mogoose.Schema.ObjectId,
      required: true,
      ref: "pages",
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PageBanner = mogoose.model("pagebanners", pageBannerSchema);

module.exports = PageBanner;
