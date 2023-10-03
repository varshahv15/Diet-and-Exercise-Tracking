function updateExerciseData(user_data) {
	$.ajax({
		url: "/api/users/exercise",
		type: "POST",
		data: user_data,
		dataType: "json",
		success: (result) => {
			if (result.statusCode === 204) {
				//alert("Exercise data updated successfully");
			}
		},
	});
}

// Calories burned per minute for each type of exercise
const exerciseCalories = {
	running: 10,
	swimming: 8,
	cycling: 7,
	walking: 5,
};

function calculateCalories() {
	const exercise = document.getElementById("exercise").value;
	const time = document.getElementById("time").value;
	const caloriesBurned = exerciseCalories[exercise] * time;
	let save_cookie = $.cookie("username");

	document.getElementById(
		"result"
	).innerHTML = `You have burned ${caloriesBurned} calories by doing ${time} minutes of ${exercise}.`;
	return {
		exerciseList: {
			exercise_type: exercise,
			time: time,
			calorie: caloriesBurned,
		},
		cookie1: save_cookie,
	};
}

const loggingUserData = () => {
	data = calculateCalories();
	console.log(data.exercise1);
	updateExerciseData(data);
};

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie == null) {
		window.location.href = "/";
	}
	$("#ExerciseF").on("click", function (e) {
		e.preventDefault();
		loggingUserData();
	});
});
