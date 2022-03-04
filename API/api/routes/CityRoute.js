import express from "express";
import CityController from "../controllers/CityController";

const CityRoute = express.Router();

CityRoute.get("/", CityController.list);

CityRoute.get("/:name", CityController.get);

CityRoute.post("/create", CityController.post);

CityRoute.put("/update/:name", CityController.put);

CityRoute.delete("/delete/:id", CityController.delete);

export default CityRoute;
