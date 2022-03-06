import express from "express";
import CityController from "../controllers/CityController";

const CityRoute = express.Router();

CityRoute.get("/", CityController.list);

CityRoute.get("/:name", CityController.get);

CityRoute.post("/create", CityController.post);

CityRoute.post("/create/:id/gastronomy", CityController.post);

CityRoute.put("/update/:name", CityController.put);

CityRoute.delete("/delete/:id", CityController.delete);

CityRoute.get("/:name/gastronomy", CityController.getCitiesGastronomy);

CityRoute.post("/:name/gastronomy", CityController.AddCityGastronomy);

CityRoute.get("/:name/experience", CityController.getCitiesExperience);

CityRoute.post("/:name/experience", CityController.AddCityExperience);

CityRoute.get("/:name/place", CityController.getCitiesPlace);

CityRoute.post("/:name/place", CityController.AddCityPlace);

export default CityRoute;
