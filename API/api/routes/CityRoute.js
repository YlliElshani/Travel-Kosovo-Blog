import express from "express";
import CityController from "../controllers/CityController";

const CityRoute = express.Router();

CityRoute.get("/list", CityController.list);

CityRoute.get("/get", CityController.get);

CityRoute.post("/create", CityController.post);

CityRoute.put("/update", CityController.put);

export default CityRoute;
