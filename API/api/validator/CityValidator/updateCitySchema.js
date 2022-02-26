import Joi from "joi";

const updateCitySchema = Joi.object({
	_id: Joi.string().required(),
	description: Joi.string()
		.alphanum()
		.min(3),
	imgPath: Joi.string(),
	name: Joi.string()
		.min(2)
		.max(20),
	rating: Joi.number(),
});

export default updateCitySchema;
