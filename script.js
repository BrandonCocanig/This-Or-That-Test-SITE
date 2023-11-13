let currentGender = ""; // To store the selected gender
let currentSeed = ""; // To store the seed

function selectGender(gender) {
  currentGender = gender;
  refresh();
}

function refresh() {
  currentSeed = document.getElementById("seedInput").value;
  const photoDisplay = document.getElementById("photoDisplay");

  // Construct the image source path based on the selected gender and seed
  const imagePath = `images/${currentGender}/${currentSeed}.jpg`; // Adjust the path based on your folder structure and file format

  // Update the image source
  photoDisplay.src = imagePath;
}

function checkAnswer() {
  const confidenceInput = document.getElementById("confidence");
  const confidence = confidenceInput.value;

  // Validate if a gender is selected
  if (currentGender === "") {
    alert("Please select a gender.");
    return;
  }

  // Validate if a confidence rating is entered
  if (confidence === "") {
    alert("Please enter your confidence rating.");
    return;
  }

  // Perform any additional logic for correctness based on your requirements

  // Display correctness
  alert(`Your choice is correct.`); // You can customize this based on your correctness criteria

  // Clear input fields
  confidenceInput.value = "";
  document.getElementById("seedInput").value = "";

  // Load the next photo
  refresh();
}
