import userModel from "../models/userModel.js";

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

const { username, password } = req.body

    try {
        const user = await userModel.find({
           username: username,
           password: password 
        })
		res.json({msg: `login succesfull`, user})
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}