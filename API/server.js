import express from "express";
import mongoose from "mongoose";
// import checkIfAuthenticated from "./api/middlewares/checkIfAuthenticated";
import getAuthToken from "./api/middlewares/getAuthToken";
// import usersRouter from "./api/routes/usersRoute";
import CityRoute from "./api/routes/CityRoute";
import cors from "cors";
import helmet from "helmet";

mongoose.connect("mongodb://localhost:27017/Travel_Test").then(() => {
	console.log("Connected to mongodb port 27017");
	const port = process.env.PORT || 1000;

	const app = express();

	app.use(
		cors({
			origin: "*",
		})
	);

	app.use(helmet());

	app.use(express.urlencoded({ extended: true }));

	app.use(express.json());

	app.use(getAuthToken);

	// app.use("/register", usersRouter);

	app.use("/city", CityRoute);

	app.listen(port, () => {
		console.log(`Real estate api running on port ${port}`);
	});
});
