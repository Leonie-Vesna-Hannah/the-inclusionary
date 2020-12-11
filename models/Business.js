const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const businessSchema = new Schema({
  title: String,
  headOfBusiness: String,
  picture: String,
  description: String,
  category: {
    type: String,
    enum: [
      "Art & Entertainment",
      "Finance",
      "Food & Drinks",
      "Health",
      "Hospitality",
      "Media & Design",
      "Retail",
    ],
    // required: [true, "Category info is required!"],
  },
  street: String,
  houseNumber: Number,
  city: String,
  zipCode: Number,
  country: String,
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    lowercase: true,
    trim: true,
  },

  design: {
    type: String,
    enum: ["pink", "blue", "red", "yellow", "green"],
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;