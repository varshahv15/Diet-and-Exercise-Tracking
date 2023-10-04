// JavaScript logic goes here
function updateDietData(user_data) {
	$.ajax({
		url: "/api/users/diet",
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

let mealItems = [];

function addItem() {
	const itemName = document.getElementById("item-name").value;
	const itemAmount = parseFloat(document.getElementById("item-amount").value);

	if (itemName && !isNaN(itemAmount)) {
		mealItems.push({ name: itemName, amount: itemAmount });
		document.getElementById(
			"meal-details"
		).innerHTML += `<li>${itemName}: ${itemAmount} grams</li>`;
		document.getElementById("item-name").value = "";
		document.getElementById("item-amount").value = "";
	}
}

function calculateTotalCalories() {
	const mealName = document.getElementById("meal-name").value;
	const totalCaloriesElement = document.getElementById("total-calories");

	if (mealItems.length === 0 || !mealName) {
		alert("Please enter a meal name and at least one meal item.");
		return;
	}

	let totalCalories = 0;
	for (const item of mealItems) {
		totalCalories += calculateCalories(item.name, item.amount);
	}

	totalCaloriesElement.textContent = totalCalories;
}

function calculateCalories(itemName, itemAmount) {
	// You can implement your own calorie calculation logic here
	// For simplicity, we'll use a predefined calorie database
	const calorieInfo = {
		apple: 52,
		banana: 105,
		chickenBreast: 165,
		salad: 15,
		rice: 206,
		// Add more items and their calorie values as needed
	};

	const normalizedItemName = itemName.toLowerCase();
	if (calorieInfo[normalizedItemName]) {
		return (calorieInfo[normalizedItemName] * itemAmount) / 100; // Assuming calorie values are for 100 grams
	} else {
		console.warn(`${itemName} is not in the calorie database.`);
		return 0;
	}
}

const loggingDietData = () => {
	data = calculateTotalCalories();
	console.log(data.exercise1);
	updateExerciseData(data);
};

$(document).ready(function () {
	let save_cookie = $.cookie("username");
	if (save_cookie == null) {
		window.location.href = "/";
	}
	$("#Item_C").on("click", function (e) {
		e.preventDefault();
		addItem();
	});
	$("#Diet_C").on("click", function (e) {
		e.preventDefault();
		calculateTotalCalories();
	});
});
