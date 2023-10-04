let express = require("express");
let router = express.Router();
//API for User
router.use("/api/users", require("./user_router"));

//API for view controller
let viewController = require("../controllers/viewController");

router.get("/", (req, res) => {
	viewController.getLoginView(req, res);
});

router.get("/register", (req, res) => {
	viewController.getRegisterView(req, res);
});

router.get("/options", (req, res) => {
	viewController.getOptionsView(req, res);
});

router.get("/exercise", (req, res) => {
	viewController.getExerciseView(req, res);
});

router.get("/calorie", (req, res) => {
	viewController.getCalorieView(req, res);
});

router.get("/diet", (req, res) => {
	viewController.getDietView(req, res);
});

router.get("/chatbox", (req, res) => {
	viewController.getChatBoxView(req, res);
});

module.exports = router;
