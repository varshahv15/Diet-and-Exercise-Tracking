let client = require("../db/dbConnection");

let collection = client.db("sit725").collection("user");

function postUser(user, callback) {
	collection.insertOne(user, callback);
}

function getAllUsers(user) {
	collection.find({}).toArray(callback);
}

function getUser(user, callback) {
	collection.find(user, callback);
}

function deleteUser(user, callback) {
	collection.deleteOne(user, callback);
}

function updateUser(user, callback) {
	collection.updateOne(user, callback);
}

module.exports = { postUser, getAllUsers, getUser, deleteUser, updateUser };
