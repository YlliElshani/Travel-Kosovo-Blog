import mongoose from "mongoose";

const schema = mongoose.Schema({
	name: String,
	location: String,
	description: String,
	city: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "city",
	},
});

const model = mongoose.model("gastronomy", schema);

export default model;
