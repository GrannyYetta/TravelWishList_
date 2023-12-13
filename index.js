import express from "express";
import countryRouter from "./routes/countryRouter.js";
import userRouter from "./routes/userRoutes.js";
import { connection } from "./db.js";
import { getQuery } from "./middlewares/queryMiddleware.js";

const app = express();
const PORT = 3000 || 8000;

connection();
app.use(express.json());
app.use("/api/countries", countryRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
