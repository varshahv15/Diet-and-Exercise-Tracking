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

const getDietView = (req, res) => {
	res.render("../views/diet.ejs");
};

const getChatBoxView = (req, res) => {
	res.render("../views/chatbox.ejs");
};

module.exports = {
	getLoginView,
	getRegisterView,
	getExerciseView,
	getOptionsView,
	getCalorieView,
	getDietView,
	getChatBoxView,
};
