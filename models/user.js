const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
          const result =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return result.test(value);
        },
        message: "Please enter a valid email address",
      },
    },

    phone: {
      type: String,
      default: null,
      unique: true,
      sparse: true, //allow multiple nulls
      validate: {
        validator: function (v) {
          // allow null OR valid 10-15 digits
          return v === null || /^[0-9]{10,15}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },

    pf_pictures: [{ type: String }],

    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "GAY", "OTHERS"],
      default: "OTHERS",
    },

    birthday: { type: String, default: "" },
    bio: { type: String, default: "" },

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

    state: { type: String, default: "" },
    city: { type: String, default: "" },
    street: { type: String, default: "" },
    lat: { type: String, default: "" },
    lon: { type: String, default: "" },

    password: {
      type: String,
      required: true,
      minlength: 8,
      validate: {
        validator: (value) => value.length >= 8,
        message: "Password must be at least 8 characters long",
      },
    },

    verificationCode: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
