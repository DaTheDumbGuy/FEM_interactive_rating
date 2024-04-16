document.addEventListener('click', e => {
    const ratingClicked = e.target.matches('.ratingForm_rating_container label');
    if (ratingClicked) {
        console.log("test");
    }
})

document.getElementById('ratingForm').addEventListener('submit', e => {
    e.preventDefault();

    const selectedRating = document.querySelector('input[name="rating"]:checked').value;
    console.log('Selected rating:', selectedRating);
});