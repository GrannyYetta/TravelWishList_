import Country from "../models/countryModels.js";

export const getCountry = async (req, res) => {
	try {
		const countries = await Country.find({});

		res.json(countries);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
export  const getCountries = async (req, res) => {
	const { code } = re.params;

	const query = {};
	if (code.length === 2) {
		query.alpha2code = id;
	}
	if (code.length === 3) {
		query.alpha3code = id;
	}
	try {
		const country = await Country.findOne({});
	} catch (error) {}
};
export const createCountry = (req, res) => {};
export  const updateCountry = (req, res) => {};
export  const deleteCountry = (req, res) => {};
