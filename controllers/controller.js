let collection = require("../models/user");

const postUser = (req, res) => {
	let user = req.body;

	collection.postUser(user, (err, result) => {
		if (!err) {
			res.json({
				statusCode: 201,
				data: result,
				message: "new user add",
			});
			//console.log(data);
		}
	});
};

const getAllUsers = (req, res) => {
	collection.getAllUsers((err, result) => {
		if (!err) {
			res.json({
				statusCode: 200,
				data: result,
				message: "get all users success",
			});
		}
	});
};

const getUser = (req, res) => {
	let user = req.body;
	collection.getUser(user, (err, result) => {
		if (!err) {
			//console.log(result);
			if (result != null) {
				res.cookie("username", result.username);
				res.json({
					statusCode: 200,
					data: result.username,
					message: "get one user success",
				});
			} else {
				res.json({
					statusCode: 200,
					data: null,
					message: "user not exits",
				});
			}
		}
	});
};

const deleteUser = (req, res) => {
	let user = req.body;
	//console.log(req);
	collection.deleteUser(user, (err, result) => {
		if (!err) {
			res.json({
				statusCode: 202,
				data: result,
				message: "user deleted",
			});
		}
	});
};

const updateUserPassword = (req, res) => {
	let user_object = req.body;
	//console.log(user_object);
	collection.updateUser(
		{ username: user_object.username },
		{ $set: { password: user_object.password } },
		(err, result) => {
			if (!err) {
				res.json({
					statusCode: 203,
					data: result,
					message: "user password updated",
				});
			}
		}
	);
};

const updateExercise = (req, res) => {
	let user_object = req.body;
	let user = user_object.cookie1;
	delete user_object.cookie1;
	user_data = user_object;
	//console.log(user_data);
	collection.updateUser(
		{ username: user },
		{ $set: user_data },
		(err, result) => {
			if (!err) {
				res.json({
					statusCode: 204,
					data: result,
					message: "exercise data updated",
				});
			}
		}
	);
};

const postExercise = (req, res) => {
	let user_object = req.body;
	let user = user_object.cookie1;
	delete user_object.cookie1;
	user_data = user_object;
	//console.log("add exercise: ", user_data);
	collection.updateUser(
		{ username: user },
		{ $push: user_data },
		(err, result) => {
			if (!err) {
				res.json({
					statusCode: 205,
					data: result,
					message: "exercise data add",
				});
			}
		}
	);
};

module.exports = {
	getAllUsers,
	postUser,
	deleteUser,
	updateExercise,
	getUser,
	postExercise,
	updateUserPassword,
};
