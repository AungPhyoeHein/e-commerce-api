const mongoose = require("mongoose");

const privateAccessTokenSchema = mongoose.Schema(
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

const PrivateAccessToken = mongoose.model(
  "privateaccesstokens",
  privateAccessTokenSchema
);

module.exports = PrivateAccessToken;
