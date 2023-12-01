import mongoose from "mongoose";

mongoose
	.connect(process.env.CONNECTION_STRING)
	.catch((error) => console.log(error));
