let express = require("express");
let router = express.Router();
//API for User
router.use("/api/users", require("./user_router"));

router.get("/", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/options", (req, res) => {
	res.render("options");
});

router.get("/exercise", (req, res) => {
	res.render("exercise");
});

module.exports = router;
