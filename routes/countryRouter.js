import express from "express";

import {
	getCountry,
	getCountries,
	createCountry,
	updateCountry,
	deleteCountry,
} from "../controllers/countryController.js";

const countryRouter = express.Router();

countryRouter.get("/:id", getCountry);

countryRouter.get("/", getCountries);

countryRouter.post("/", createCountry);

countryRouter.put("/:id", updateCountry);

countryRouter.delete("/id", deleteCountry);

export default countryRouter;
