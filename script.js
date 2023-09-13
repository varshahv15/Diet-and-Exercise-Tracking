// Calories burned per minute for each type of exercise
const exerciseCalories = {
    running: 10,
    swimming: 8,
    cycling: 7,
    walking: 5
  };
  
  function calculateCalories() {
    const exercise = document.getElementById("exercise").value;
    const time = document.getElementById("time").value;
    const caloriesBurned = exerciseCalories[exercise] * time;
  
    document.getElementById("result").innerHTML = `You have burned ${caloriesBurned} calories by doing ${time} minutes of ${exercise}.`;
  }
  