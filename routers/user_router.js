let express = require("express");
let user_router = express.Router();
let controller = require("../controllers/controller");

user_router.post("/register", (req, res) => {
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

user_router.put("/diet", (req, res) => {
	controller.updateDiet(req, res);
});

user_router.post("/diet", (req, res) => {
	controller.postDiet(req, res);
});

user_router.put("/exercise", (req, res) => {
	controller.updateExercise(req, res);
});

user_router.post("/exercise", (req, res) => {
	controller.postExercise(req, res);
});

module.exports = user_router;
