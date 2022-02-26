import CityModel from "../models/CityModel";
import updateCitySchema from "../validator/CityValidator/updateCitySchema";

export default {
	list: async (req, res) => {
		const list = await CityModel.find();

		return res.json(list);
	},
	get: async (req, res) => {
		const { id } = req.query;

		const foundItem = await CityModel.find({ _id: id });

		return res.json(foundItem);
	},
	post: async (req, res) => {
		const city = await new CityModel(req.body);

		city.save();

		return res.json(city);
	},
	put: async (req, res) => {
		const city = req.body;

		const validationResult = updateCitySchema.validate(city);

		if (validationResult.error) {
			return res.status(401).json({
				message: "Validation failed while updating",
				error: validationResult.error,
			});
		}
		const updateCity = await CityModel.updateOne({ _id: city._id }, city);

		return res.json(updateCity);
	},
};
