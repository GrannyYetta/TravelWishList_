import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
	const { firstname, lastname, email, password } = req.body;

	const generatedUsername =
		firstname + lastname + Math.floor(Math.random() * 50);
	console.log();

	try {
		const user = await userModel.create({
			firstname: firstname,
			lastname: lastname,
			username: generatedUsername,
			email: email,
			password: password,
		});
		console.log(user);
		res.json({
			msg: `Congratulations! Your username ${generatedUsername} has been successfully created.`,
			user: user.username, // to send to the frontend
		});
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const loginUser = async (req, res) => {
	const { identifier, password } = req.body;	


	try {
		//regEx => regular Expressions
		const myQueryString = identifier.includes("@") ? {email:identifier} : {username:identifier};

		const user =  userModel.findOne(myQueryString);
		
		if (user) {
		
			//hash check
			bcrypt.compare(password, user.password, (err, result) => {
				console.log(result);
				// result is either TRUE / FALSE
				if (result) {
					res.json({ msg: `login succesfull`, user });
				} else {
					res.json({ msg: "password wrong", err });
				}
			}); 
		}else{
			res.send("user unknown")
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	} 
};

export const updateUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await userModel.updateOne(req.body);
		res.json({ msg: `${user} has been updated` });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const deleteUser = async (req, res) => {
	const { id } = req.query;

	try {
		const user = await userModel.findByIdAndDelete(id);
		console.log(user);
		res.json({ msg: `${user.firstname} has been successfully deleted` });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
