import mongoose from "mongoose";

const schema = mongoose.Schema({
  description: String,
  imgPath: String,
  name: String,
  files: String,
  rating: Number,
  updatedDate: Date,
  insertedDate: Date,
  gastronomies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "gastronomy",
    },
  ],
  experiences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "experience",
    },
  ],
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "place",
    },
  ],
});

const model = mongoose.model("Cities", schema);

export default model;
