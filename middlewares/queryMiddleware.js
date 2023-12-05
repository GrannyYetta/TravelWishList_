export const getQuery = (req, res, next) => {
	const { countryCode } = req.params;
	console.log("countryCode", countryCode)
	const query = {};

	if (countryCode.length === 2) {
		query.alpha2code = countryCode.toUpperCase();
	}
	if (countryCode.length === 3) {
		query.alpha3code = countryCode.toUpperCase();
	}

	req.countryQuery = query;
	next();
};

export const getName = (req, res, next) => {
    const { countryName } = req.name;
    console.log("countryName", countryName)
    const query = {};
}

