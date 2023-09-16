let collection = require("../models/user");

const postUser = (req, res) => {
	let user = req.body;

	collection.postUser(user, (err, result) => {
		if (!err) {
			res.json({ statusCode: 201, data: result, message: "success" });
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
			res.json({
				statusCode: 200,
				data: result,
				message: "get one user success",
			});
		}
	});
};

const deleteUser = (req, res) => {
	let user = req.body;
	collection.deleteUser(user, (err, result) => {
		if (!err) {
			res.json({ statusCode: 202, data: result, message: "deleted" });
		}
	});
};

const updateUser = (req, res) => {
	let user = req.body;
	collection.updateUser(user, (err, result) => {
		if (!err) {
			res.json({ statusCode: 204, data: result, message: "deleted" });
		}
	});
};

module.exports = { getAllUsers, postUser, deleteUser, updateUser, getUser };
