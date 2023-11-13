// main.js

// Sample JSON data for demonstration purposes
// Assume the JSON file is named photoData.json
const photoDataPath = 'photoData.json';

// Variable to hold photo data
let photoData;

// Variables for game state
let currentIndex = 0;
let correctGuesses = 0;
let totalAttempts = 0;
let totalConfidence = 0;

// Function to fetch JSON data
async function fetchPhotoData() {
  try {
    const response = await fetch(photoDataPath);
    if (!response.ok) {
      throw new Error(`Error fetching photo data: ${response.statusText}`);
    }
    photoData = await response.json();
    console.log('Photo data loaded:', photoData);
  } catch (error) {
    console.error(error);
  }
}

// Initial setup: Fetch photo data and start the game
fetchPhotoData().then(() => {
  displayRandomPhoto();
  updateStatistics();
});

// Function to display a random photo
function displayRandomPhoto() {
  const photoContainer = document.getElementById('photo-container');
  const currentPhoto = photoData[currentIndex];

  if (currentPhoto) {
    const imageUrl = `photos/${currentPhoto.filename}`;
    console.log('Displaying photo:', imageUrl);
    photoContainer.innerHTML = `<img src="${imageUrl}" alt="Random Person">`;
  } else {
    console.log('Game Over: No more photos');
    photoContainer.innerHTML = 'Game Over';
  }
}

// Function to submit a guess
function submitGuess(userGuess) {
  const confidenceInput = document.getElementById('confidence');
  const confidence = parseInt(confidenceInput.value);

  if (confidence >= 1 && confidence <= 10) {
    totalAttempts++;
    totalConfidence += confidence;

    const currentPhoto = photoData[currentIndex];
    const isCorrect = currentPhoto && userGuess === currentPhoto.category;

    if (isCorrect) {
      correctGuesses++;
      console.log('Correct guess!');
      // You can show a message or update the UI to indicate correct guess
    } else {
      console.log('Wrong guess!');
      // You can show a message or update the UI to indicate wrong guess
    }

    updateStatistics();
    // Display the same photo again
    displayRandomPhoto();
  } else {
    alert('Please enter a confidence value between 1 and 10.');
  }

  confidenceInput.value = ''; // Clear the input for the next guess
}

// Function to update the statistics display
function updateStatistics() {
  const statisticsElement = document.getElementById('statistics');
  const accuracy = ((correctGuesses / totalAttempts) * 100).toFixed(2);
  const averageConfidence = (totalConfidence / totalAttempts).toFixed(2);

  statisticsElement.innerHTML = `
    <p>Accuracy: ${accuracy}%</p>
    <p>Total Attempts: ${totalAttempts}</p>
    <p>Average Confidence: ${averageConfidence}</p>
  `;
}

// Function to move to the next photo
function nextPhoto() {
  currentIndex++;
  displayRandomPhoto();
}
