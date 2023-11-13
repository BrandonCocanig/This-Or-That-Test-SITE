const photoContainer = document.getElementById('photo-container');
const displayPhoto = document.getElementById('display-photo');
const confidenceInput = document.getElementById('confidence');

function chooseGender(gender) {
    const path = `/photos/${gender}`;
    const randomIndex = Math.floor(Math.random() * 2) + 1; // Change 10 to the number of photos you have
    const photoUrl = `${path}/photo${randomIndex}.jpg`;
    displayPhoto.src = photoUrl;
}

function checkGuess() {
    // Add logic to check correctness and display result
    const userConfidence = confidenceInput.value;
    // Add your logic to determine correctness based on user's confidence and chosen gender
    // Update the display or show a message accordingly
    // You can use an array of correct genders for each photo or any other method you prefer
}
