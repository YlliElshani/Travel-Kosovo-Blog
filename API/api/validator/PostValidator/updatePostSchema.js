import Joi from "joi";

const updatePostSchema = Joi.object({
	_id: Joi.string().required(),
	blogTitle: Joi.string()
		.alphanum()
		.min(3),
        imgPath: Joi.string(),
        blogHTML: Joi.string()
		.min(2)
		.max(20)
});

export default updatePostSchema;
