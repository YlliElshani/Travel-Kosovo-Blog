import mongoose from "mongoose";

const schema = mongoose.Schema({
	name: String,
	location: String,
	description: String,
	insertedDate: Date,
	city: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "city",
	},
});

const model = mongoose.model("gastronomy", schema);

export default model;
