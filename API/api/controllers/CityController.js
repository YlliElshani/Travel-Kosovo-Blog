import CityModel from "../models/CityModel";
import updateCitySchema from "../validator/CityValidator/updateCitySchema";

export default {
	list: async (req, res) => {
		const list = await CityModel.find();

		return res.json(list);
	},
	get: async (req, res) => {
		const name = req.params.name;

		const foundItem = await CityModel.findOne({ name: name });

		return res.json(foundItem);
	},
	post: async (req, res) => {
		const city = await new CityModel(req.body);

		city.save();

		return res.json(city);
	},
	delete: async (req, res) => {
		const { id } = req.params;
		try {
			const removeCity = await CityModel.deleteOne({ _id: id });
			return res.json(removeCity);
		} catch (err) {
			console.log(`Errori ${err}`);
			// res.result().json(err);
		}
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
		const updateCity = await CityModel.updateOne({ name: city.name }, city);

		return res.json(updateCity);
	},
};
