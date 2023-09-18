const getLoginView = (req, res) => {
	res.render("../views/login.ejs");
};

const getRegisterView = (req, res) => {
	res.render("../views/register.ejs");
};

const getOptionsView = (req, res) => {
	res.render("../views/options.ejs");
};

const getExerciseView = (req, res) => {
	res.render("../views/exercise.ejs");
};

const getCalorieView = (req, res) => {
	res.render("../views/calorie.ejs");
};

module.exports = {
	getLoginView,
	getRegisterView,
	getExerciseView,
	getOptionsView,
	getCalorieView,
};
