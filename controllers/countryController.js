import CountryModel from "../models/countryModels.js";


export const getCountry = async (req, res) => {
	try {
		const countries = await CountryModel.find({});

		res.json(countries);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
export const getCountries = async (req, res) => {
	const { code } = re.params;

	const query = {};
	if (code.length === 2) {
		query.alpha2code = id;
	}
	if (code.length === 3) {
		query.alpha3code = id;
	}
	try {
		const country = await CountryModel.findOne(query);
		res.json(country);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
export const createCountry = async (req, res) => {
	//const { body } = req;

	try {
		const country = await CountryModel.create({
			name: "Germany",
			alpha2code: "DE",
			alpha3code: "DEU",
		});
		console.log(country);
		res.send("country created")
	} catch (error) {
		res.status(500).json({msg: "error happend", error});
	}
};
export const updateCountry = async (req, res) => {
	const {
		body,
		params: { code },
	} = req;

	const query = {};

	if (code.length === 2) {
		query.alpha2code = id;
	}
	if (code.length === 3) {
		query.alpha3code = id;
	}

	try {
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteCountry = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send(error.message);
	}
};
