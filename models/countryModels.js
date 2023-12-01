import mongoose from "mongoose";

const { Schema } = mongoose;

const CountrySchema = new Schema({
	name: String,
	alpha2code: { String },
	alpha3code: { String },
});
export const CountryModel = mongoose.model("Country", CountrySchema);


