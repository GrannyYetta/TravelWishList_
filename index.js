import express from "express";
import countryRouter from "./routes/countryRouter.js";
import { createCountry } from "./controllers/countryController.js";

const app = express();
const PORT = 3000 || 8000;

app.use(express.json());
app.get("/", createCountry)
app.use("/api/countries", countryRouter);

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
