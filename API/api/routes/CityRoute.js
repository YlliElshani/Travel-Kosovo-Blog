import express from "express";
import CityController from "../controllers/CityController";

const CityRoute = express.Router();

CityRoute.get("/", CityController.list);

CityRoute.get("/:id", CityController.get);

CityRoute.post("/create", CityController.post);

CityRoute.put("/update/:id", CityController.put);

export default CityRoute;
