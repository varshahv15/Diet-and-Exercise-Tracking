let express = require("express");
let user_router = express.Router();
let controller = require("../controllers/controller");

user_router.post("/register", (req, res) => {
	controller.postUser(req, res);
});

user_router.get("/", (req, res) => {
	controller.getAllUsers(req, res);
});

user_router.get("/login", (req, res) => {
	controller.getUser(req, res);
});

user_router.delete("/delete", (req, res) => {
	controller.deleteUser(req, res);
});

user_router.put("/update", (req, res) => {
	controller.updateUser(req, res);
});

module.exports = user_router;
