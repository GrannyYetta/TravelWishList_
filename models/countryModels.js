import mongoose from "mongoose";

const { Schema } = mongoose;

const CountrySchema = new Schema({
	name: String,
	alpha2code: { type: String },
	alpha3code: { type: String },
});

const CountryModel = mongoose.model("Country", CountrySchema);

export default CountryModel;
