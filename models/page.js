const mongoose = require("mongoose");

const pageSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "users",
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: (value) => {
          //email validate
          const result =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return result.test(value);
        },
        message: "Please enter a valid email address",
      },
    },

    phone: {
      type: String,
      default: "",
      required: true,
      unique: true,
      trim: true,
    },

    id_card_img: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    id_card_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    id_card_name: {
      type: String,
      required: true,
    },

    page_pictures: [
      {
        type: String,
        required: false,
      },
    ],

    social_link: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      enum: ["ECOMMERCE", "RESTAURANT"],
      default: "ECOMMERCE",
    },

    tamplate: {
      type: Number,
      required: true,
      default: 1,
    },

    status: {
      type: String,
      enum: ["NORMAL", "VERIFY", "WARNING", "SCAM", "BAN"],
      default: "NORMAL",
    },

    state: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    locality: {
      type: String,
      default: "",
    },

    lat: {
      type: String,
      default: "",
    },

    lon: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      validate: {
        validator: (value) => {
          //check if password is at least 8 characters long.
          return value.length > 6;
        },
        message: "Password must be at least 8 characters long",
      },
    },

    is_public: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Page = mongoose.model("pages", pageSchema);

module.exports = Page;
