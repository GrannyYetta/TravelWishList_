import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CountrySchema = new Schema({
	name: String,
	alpha2code: { String },
	alpha3code: { String },
});
const Country = model("Country", CountrySchema);

export default Country;
