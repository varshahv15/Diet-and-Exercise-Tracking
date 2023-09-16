function calculateCalories() {
    const ChooseactivityLevel = document.getElementById('activityLevel');
    const selectedIndex = ChooseactivityLevel.selectedIndex;
        const ageInput = document.getElementById('age');
        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
        const activityLevelSelect = document.getElementById('activityLevel');
    
        // Check if all required fields are filled
        if (!ageInput.value || !weightInput.value || !heightInput.value || activityLevelSelect.selectedIndex === -1) {
            document.getElementById('output').innerHTML = 'Please fill in all required fields.';
            return; // Exit the function if any field is missing
        }

    // Define calorie ranges for different activity levels (adjust these as needed)
    const activityLevels = [
        { level: 'Sedentary', minCalories: 1800, maxCalories: 2200 },
        { level: 'Lightly Active', minCalories: 2200, maxCalories: 2500 },
        { level: 'Moderately Active', minCalories: 2500, maxCalories: 2800 },
        { level: 'Very Active', minCalories: 2800, maxCalories: 3200 },
        { level: 'Super Active', minCalories: 3200, maxCalories: 4000 }
    ];

    if (selectedIndex >= 0) {
        // Get the selected activity level based on the selectedIndex
        const selectedActivity = activityLevels[selectedIndex];

        // Display the result with the calculated calorie range
        document.getElementById('output').innerHTML = `For your activity level "${selectedActivity.level}," recommended daily calorie intake is between ${selectedActivity.minCalories} and ${selectedActivity.maxCalories} calories.`;

        // Create the chart with only the selected activity level
        const charts = document.getElementById('calorieChart').getContext('2d');
        const labels = [selectedActivity.level];
        const minCalories = [selectedActivity.minCalories];
        const maxCalories = [selectedActivity.maxCalories];

        const chart = new Chart(charts, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Min Calories',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        data: minCalories,
                    },
                    {
                        label: 'Max Calories',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        data: maxCalories,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    } else {
        // Display an error message if no option is selected
        document.getElementById('output').innerHTML = 'Please select an activity level.';
    }
}
