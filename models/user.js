let client = require("../db/dbConnection");

let collection = client.db("sit725").collection("user");

function postUser(user, callback) {
	collection.insertOne(user, callback);
}

function getAllUsers(callback) {
	collection.find({}).toArray(callback);
}

function getUser(user, callback) {
	collection.findOne(user, callback);
}

function deleteUser(user, callback) {
	collection.deleteOne(user, callback);
}

function updateUser(user, data, callback) {
	collection.updateOne(user, data, callback);
}

module.exports = { postUser, getAllUsers, getUser, deleteUser, updateUser };
