const exerciseCalories = {
  running: 10,
  swimming: 8,
  cycling: 7,
  walking: 5
};

function changeBackground() {
  const exercise = document.getElementById("exercise").value;
  document.body.style.backgroundImage = `url('images/${exercise}.jpg')`;
  document.getElementById("result").style.backgroundImage = `url('images/${exercise}.jpg')`;
}

function calculateCalories() {
  const exercise = document.getElementById("exercise").value;
  const time = document.getElementById("time").value;
  const caloriesBurned = exerciseCalories[exercise] * time;

  document.getElementById("result").innerHTML = `<span class="output-text">You have burned ${caloriesBurned} calories by doing ${time} minutes of ${exercise}.</span>`;
}
