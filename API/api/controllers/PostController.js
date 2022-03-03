import PostModel from "../models/PostModel";
import updatePostSchema from "../validator/PostValidator/updatePostSchema";

export default {
	list: async (req, res) => {
		const list = await PostModel.find();

		console.log('testing list method')
		return res.json(list);
	},
	get: async (req, res) => {
		const id = req.params.id;

		const foundItem = await PostModel.findOne({ _id: id });
		console.log('testing list metho2d')
		return res.json(foundItem);
	},
	post: async (req, res) => {
		const post = req.body;

        // const validationResult = updatePostSchema.validate(post);

        // if (validationResult.error) {
        //     return res.status(401).json({
        //         message: "Validation failed while updating",
        //         error: validationResult.error,
        //     });
        // }

        const addpost = await new PostModel(post);

        addpost.save();

        return res.json(addpost);
	},
	put: async (req, res) => {
		const post = req.body;

		const validationResult = updatePostSchema.validate(post);

		if (validationResult.error) {
			return res.status(401).json({
				message: "Validation failed while updating",
				error: validationResult.error,
			});
		}
		const updatePost = await PostModel.updateOne({ _id: post._id }, post);

		return res.json(updatePost);
	},
};
