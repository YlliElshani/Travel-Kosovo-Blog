import mongoose from "mongoose";

const schema = mongoose.Schema({
	blogTitle: String,
	imgPath: String,
	blogHTML: String,
});

const model = mongoose.model("Posts", schema);

export default model;
