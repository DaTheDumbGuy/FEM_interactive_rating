// Select the currently clicked element with the class 'clicked'
let currentClicked = document.querySelector('.clicked');

document.addEventListener('click', e => {
    // Check if the user clicked an element with the class 'ratingForm_rating_container label' (label/rating)
    if (e.target.matches('.ratingForm_rating_container label')) {

        // Remove the 'clicked' class from the previously clicked element
        currentClicked.classList.remove('clicked');

        // Toggle the 'clicked' class on the newly clicked element
        e.target.classList.toggle('clicked');

        // Update the reference to the currently clicked element
        currentClicked = e.target;
    }
});

document.getElementById('ratingForm').addEventListener('submit', e => {
    e.preventDefault();

    const selectedRating = document.querySelector('input[name="rating"]:checked').value;
    console.log('Selected rating:', selectedRating);
});