import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.DB_URI);

console.log(process.env.DB_URI)
