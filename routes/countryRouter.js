import express from "express";

import {
	getCountry,
	getCountries,
	createCountry,
	updateCountry,
	deleteCountry,
} from "../controllers/countryController.js";

import userRouter from "./userRoutes.js";
import { getQuery } from "../middlewares/queryMiddleware.js";

const countryRouter = express.Router();

countryRouter.route("/").get(getCountries).post(createCountry);

countryRouter
	.route("/:countryCode")
	.get(getQuery, getCountry)
	.put(getQuery, updateCountry)
	.delete(getQuery, deleteCountry);

export default countryRouter;
