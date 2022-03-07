import express from "express";
import CityController from "../controllers/CityController";

const CityRoute = express.Router();

//Get All
CityRoute.get("/", CityController.list);

//Get By Id
CityRoute.get("/:name", CityController.get);
//Create City
CityRoute.post("/create", CityController.post);
//Update City
CityRoute.put("/update/:name", CityController.put);
//Delete City
CityRoute.delete("/delete/:name", CityController.delete);

//Gastronomy
CityRoute.get("/:name/gastronomy", CityController.getCitiesGastronomy);
CityRoute.post("/:name/gastronomy", CityController.AddCityGastronomy);

//Gastronomy
CityRoute.get("/:name/experience", CityController.getCitiesExperience);
CityRoute.post("/:name/experience", CityController.AddCityExperience);

//Places
CityRoute.get("/:name/place", CityController.getCitiesPlace);
CityRoute.post("/:name/place", CityController.AddCityPlace);

export default CityRoute;
