const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrudSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: "/tshirt1.webp",
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    size: [
      {
        type: String,
        required: true,
      },
    ],
    color: [
      {
        type: String,
        required: true,
      },
    ],
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Crud", CrudSchema);
