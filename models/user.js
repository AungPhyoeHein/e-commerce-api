const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
      unique: true,
      trim: true,
    },

    pf_pictures: [
      {
        type: String,
        required: false,
      },
    ],

    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "GAY", "OTHERS"],
      default: "OTHERS",
    },

    birthday: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["OWNER", "ADMIN", "USER"],
      default: "USER",
    },

    status: {
      type: String,
      enum: ["NORMAL", "VERIFY", "WARNING", "SCAM"],
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

    street: {
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
    verificitionCode: String,
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
