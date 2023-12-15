import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (req, res, next) => {
	const { password } = req.body;

	if(password){
		bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
		
			if(err){
			res.json({msg: "error in pw-hashing..."})
			
			}else{

			req.body.password = hashedPassword
			next()
		}
	});
	}
	
};
