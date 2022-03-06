import express from "express";
import mongoose from "mongoose";
// import checkIfAuthenticated from "./api/middlewares/checkIfAuthenticated";
// import getAuthToken from "./api/middlewares/getAuthToken";
// import usersRouter from "./api/routes/usersRoute";
import CityRoute from "./api/routes/CityRoute";
import cors from "cors";
import helmet from "helmet";
import PostRoute from "./api/routes/postRoute";
// import GastronomyRoute from './api/routes/GastronomyRoute'
import fileupload from "express-fileupload";

const connectionSting = "mongodb://localhost:27017/Travel_Test";

mongoose.connect(connectionSting).then(() => {
	console.log("Connected to mongodb on: " + connectionSting);
	const port = process.env.PORT || 1000;

	const app = express();

	app.use(
		cors({
			origin: "*",
		})
	);
	app.use("/static", express.static(`${__dirname}/public/files`));

	app.use(helmet());

	app.use(fileupload());

	app.use(express.urlencoded({ extended: true }));

	app.use(express.json());

	// app.use(getAuthToken);

	// app.use("/register", usersRouter);

	app.use("/cities", CityRoute);

	app.use("/posts", PostRoute);

	// app.use("/gastronomy", GastronomyRoute);

	app.listen(port, () => {
		console.log(`Travel blog API running on port ${port}`);
	});
});
