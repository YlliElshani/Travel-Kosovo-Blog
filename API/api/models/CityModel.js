import mongoose from "mongoose";

const schema = mongoose.Schema({
	description: String,
	imgPath: String,
	name: String,
	rating: Number,
});

const model = mongoose.model("Cities", schema);

export default model;
