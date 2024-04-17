let currentClicked = null;

document.addEventListener('click', e => {
    // Check if the user clicked an element with the class 'ratingForm_rating_container label' (label/rating)
    if (e.target.matches('.ratingForm_rating_container label')) {

        // If currentClicked is not null, remove the 'clicked' class from it
        if (currentClicked) {
            currentClicked.classList.remove('clicked');
        }

        // Toggle the 'clicked' class on the newly clicked element
        e.target.classList.toggle('clicked');

        // Update the reference to the currently clicked element
        currentClicked = e.target;
    }
});


document.getElementById('ratingForm').addEventListener('submit', e => {
    e.preventDefault();

    // Check if any radio button with name "rating" is checked
    const selectedRadio = document.querySelector('input[name="rating"]:checked');

    // Hide the rating container and display the "thank you" message
    document.querySelector('.rating_container').classList.add('hide');
    document.querySelector('.rating_result').classList.add('thank_you_state');

    // Get the element where the selected rating will be displayed
    const selectedRatingResult = document.querySelector('.rating_user');

    if (selectedRadio) {
        // If a rating is selected, display the selected rating
        selectedRatingResult.textContent = selectedRadio.value;
    } else {
        // If no rating is selected, display "0" to indicate no rating
        selectedRatingResult.textContent = '0';
    }
});
