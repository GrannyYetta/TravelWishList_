import express from "express";

import {
	getCountry,
	getCountries,
	createCountry,
	updateCountry,
	deleteCountry,
} from "../controllers/countryController.js";
import { getQuery } from "../middlewares/queryMiddleware.js";

const countryRouter = express.Router();

countryRouter.get("/:countryCode", getQuery, getCountry);

countryRouter.get("/", getCountries);

countryRouter.post("/", createCountry);

countryRouter.put("/:countryCode", getQuery, updateCountry);

countryRouter.delete("/:countryCode", getQuery, deleteCountry);

export default countryRouter;
