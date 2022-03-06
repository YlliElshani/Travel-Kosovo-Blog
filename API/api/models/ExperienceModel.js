import mongoose from "mongoose";

const schema = mongoose.Schema({
	name: String,
	description: String,
	city: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "city",
	},
});

const model = mongoose.model("experience", schema);

export default model;
