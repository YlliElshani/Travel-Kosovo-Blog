import mongoose from "mongoose";

const schema = mongoose.Schema({
	name: String,
	description: String,
	location: String,
	openTime: Number,
	closeTime: Number,
	city: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "city",
	},
});

const model = mongoose.model("place", schema);

export default model;
