import CountryModel from "../models/countryModels.js";

export const getCountries = async (req, res) => {
	try {
		const countries = await CountryModel.find();
		res.json(countries);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getCountry = async (req, res) => {
	const query = req.countryQuery; //countryQuery
	console.log("query in getCountry", query);
	try {
		const country = await CountryModel.findOne(query);
		res.json(country);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const createCountry = async (req, res) => {
	const { body } = req;

	try {
		const country = await CountryModel.create({
			name: "Germany",
			alpha2code: "DE",
			alpha3code: "DEU",
		});
		console.log(country);
		res.send("country created");
	} catch (error) {
		res.status(500).json({ msg: "error happend", error });
	}
};

export const updateCountry = async (req, res) => {
	const { body } = req;

	try {
		const country = await CountryModel.updateOne(req.countryQuery, body); //idQuery
		res.json(country);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteCountry = async (req, res) => {
	try {
		const country = await CountryModel.deleteOne(req.countryQuery);
		res.json(country);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
