import CityModel from "../models/CityModel";
import GastronomyModel from "../models/GastronomyModel";
import ExperienceModel from "../models/ExperienceModel";
import PlaceModel from "../models/PlaceModel";
import FileServiceCity from "../services/FileServiceCity";

export default {
	list: async (req, res) => {
		const list = await CityModel.find();

		return res.json(list);
	},
	get: async (req, res) => {
		const id = req.params.id;

		const foundItem = await CityModel.findOne({ _id: id });

		return res.json(foundItem);
	},
	post: async (req, res) => {
		const city = await new CityModel(req.body);

		city.save();

		return res.json(city);
	},
	delete: async (req, res) => {
		const { name } = req.params;
		try {
			const removeCity = await CityModel.deleteOne({ name: name });
			return res.json(removeCity);
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},
	put: async (req, res) => {
		const { id } = req.params;
		const body = req.body;

		const city = await CityModel.findOne({ _id: id });
		const updateCity = await CityModel.updateOne(city, body);

		return res.json(updateCity);
	},
	getCitiesGastronomy: async (req, res) => {
		const { id } = req.params;

		const city = await CityModel.findOne({ _id: id }).populate("gastronomies");

		const gastronomies = [];
		city.gastronomies.forEach((gastronomy) => {
			if (gastronomy.city.toString() == id) {
				gastronomies.push(gastronomy);
			}
		});
		res.json(gastronomies);
	},
	AddCityGastronomy: async (req, res) => {
		const { cityId } = req.params;

		const newGastronomy = new GastronomyModel(req.body);

		const city = await CityModel.findOne(cityId);

		newGastronomy.city = city;

		await newGastronomy.save();

		city.gastronomies.push(newGastronomy);

		await city.save();

		res.json(newGastronomy);
	},
	getCitiesExperience: async (req, res) => {
		const { cityId } = req.params;

		const city = await CityModel.findOne(cityId).populate("experiences");

		res.json(city.experiences);
	},
	AddCityExperience: async (req, res) => {
		const { cityId } = req.params;

		const newExperience = new ExperienceModel(req.body);

		const city = await CityModel.findOne(cityId);

		newExperience.city = city;

		await newExperience.save();

		city.experiences.push(newExperience);

		await city.save();

		res.json(newExperience);
	},
	getCitiesPlace: async (req, res) => {
		const { id } = req.params;

		const city = await CityModel.findOne({ _id: id }).populate("places");

		const places = [];
		city.places.forEach((place) => {
			if (place.city.toString() == id) {
				places.push(place);
			}
		});
		res.json(places);
	},
	AddCityPlace: async (req, res) => {
		const { cityId } = req.params;

		const newPlace = new PlaceModel(req.body);

		const city = await CityModel.findOne(cityId);

		newPlace.city = city;

		await newPlace.save();

		city.places.push(newPlace);

		await city.save();

		res.json(newPlace);
	},
	deleteFile: async (req, res) => {
		const { cityId, filename } = req.params;

		FileServiceCity.deleteFiles([filename]);

		const cityData = await CityModel.findOne({ _id: cityId }, { files: 1 });

		const updatedFilenames = cityData.files
			.replace(`${filename};`, "")
			.replace(filename, "");

		await CityModel.updateOne(
			{ _id: cityId },
			{
				files: updatedFilenames,
			}
		);

		const updatedCity = await CityModel.findOne(
			{ _id: cityId },
			{
				files: updatedFilenames,
			}
		);

		return res.json(updatedCity);
	},
	uploadFile: async (req, res) => {
		const { id } = req.params;

		const receivedFiles = [req.files.file];

		try {
			const files = await FileServiceCity.uploadFiles(receivedFiles);

			const realEstate = await CityModel.find({ _id: id }, { files: 1 });
			const oldFiles = realEstate.files;

			const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

			await CityModel.updateOne({ _id: id }, [
				{
					$set: { files: newFiles },
				},
			]);

			const updatedCity = await CityModel.find({ _id: id });
			return res.json(updatedCity);
		} catch (err) {
			res.status(500).json({ err: err.toString() });
		}
	},
};
