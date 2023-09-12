let express = require("express");
let router = express.Router();
let controller = require("../controllers/controller");

router.post("/", (req, res) => {
	controller.postUser(req, res);
});

router.get("/", (req, res) => {
	controller.getAllUsers(req, res);
});

router.get("/login", (req, res) => {
	controller.getUser(req, res);
});

router.delete("/", (req, res) => {
	controller.deleteUser(req, res);
});

router.update("/", (req, res) => {
	controller.updateUser(req, res);
});

module.exports = router;
