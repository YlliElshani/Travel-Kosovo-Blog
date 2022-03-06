import mongoose from "mongoose";

const schema = mongoose.Schema({
	description: String,
	imgPath: String,
	name: String,
	rating: Number,
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
