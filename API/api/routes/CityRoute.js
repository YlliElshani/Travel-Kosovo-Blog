import express from "express";
import CityController from "../controllers/CityController";

const CityRoute = express.Router();

//Get All
CityRoute.get("/", CityController.list);

//Get By Id
CityRoute.get("/:id", CityController.get);
//Create City
CityRoute.post("/create", CityController.post);
//Update City
CityRoute.put("/update/:id", CityController.put);
//Delete City
CityRoute.delete("/delete/:name", CityController.delete);

// // Gastronomy
CityRoute.get("/:id/gastronomy", CityController.getCitiesGastronomy);
CityRoute.post("/:id/gastronomy", CityController.AddCityGastronomy);

// //Gastronomy
CityRoute.get("/:id/experience", CityController.getCitiesExperience);
CityRoute.post("/:id/experience", CityController.AddCityExperience);

//Places
CityRoute.get("/:id/places", CityController.getCitiesPlace);
CityRoute.post("/:id/places", CityController.AddCityPlace);

//DropZone
CityRoute.put("/:id/uploadFile", CityController.uploadFile);
CityRoute.put("/:postId/removeFile/:filename", CityController.deleteFile);

export default CityRoute;
