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

function changeBackground() {
	const exercise = document.getElementById("exercise").value;
	document.body.style.backgroundImage = `url('images/${exercise}.jpg')`;
	document.getElementById(
		"result"
	).style.backgroundImage = `url('images/${exercise}.jpg')`;
}

function calculateCalories() {
	const exercise = document.getElementById("exercise").value;
	const time = document.getElementById("time").value;
	const caloriesBurned = exerciseCalories[exercise] * time;
	let save_cookie = $.cookie("username");

	document.getElementById(
		"result"
	).innerHTML = `<span class="output-text"> You have burned ${caloriesBurned} calories by doing ${time} minutes of ${exercise}.</span>`;
	return {
		exerciseList: {
			exercise_type: exercise,
			time: time,
			calorie: caloriesBurned,
		},
		cookie1: save_cookie,
	};
}

const loggingExerciseData = () => {
	data = calculateCalories();
	console.log(data.exercise1);
	updateExerciseData(data);
};

const backButton = document.getElementById("Backbutton");     // Add a click event listener to the button    
backButton.addEventListener("click", function() {         // Redirect to the options page when the button is clicked        
window.location.href = "/options"; // Update the URL accordingly   
});

let socket = io();
	socket.on('Number', (message) => {
	console.log('Random number is: ' + message);
})

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie == null) {
		window.location.href = "/";
	}
	$("#Exercise_C").on("click", function (e) {
		e.preventDefault();
		loggingExerciseData();
	});
});
