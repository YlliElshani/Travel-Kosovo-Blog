import CityModel from "../models/CityModel";
import GastronomyModel from "../models/GastronomyModel";
import ExperienceModel from "../models/ExperienceModel";
import PlaceModel from "../models/PlaceModel";
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
    const { name } = req.params;
    try {
      const removeCity = await CityModel.deleteOne({ name: name });
      return res.json(removeCity);
    } catch (err) {
      console.log(`Error: ${err}`);
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
  getCitiesGastronomy: async (req, res) => {
    const { cityId } = req.params;

    const city = await CityModel.findOne(cityId).populate("gastronomies");

    res.json(city.gastronomies);
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
    const { cityId } = req.params;

    const city = await CityModel.findOne(cityId).populate("places");

    res.json(city.places);
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
};
