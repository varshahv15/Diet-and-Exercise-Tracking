let express = require("express");
let user_router = express.Router();
let controller = require("../controllers/controller");

user_router.post("/", (req, res) => {
	controller.postUser(req, res);
});

user_router.get("/all", (req, res) => {
	controller.getAllUsers(req, res);
});

user_router.post("/login", (req, res) => {
	controller.getUser(req, res);
});

user_router.delete("/", (req, res) => {
	controller.deleteUser(req, res);
});

user_router.put("/", (req, res) => {
	controller.updateUser(req, res);
});

module.exports = user_router;
