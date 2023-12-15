import express from "express";
import { hashPassword } from "../middlewares/hashPassword.js";

import {
	registerUser,
	loginUser,
	deleteUser,
	updateUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/registration", hashPassword, registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/updateuser", updateUser);
userRouter.delete("/deleteuser", deleteUser);

export default userRouter;
