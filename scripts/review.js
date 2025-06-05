let reviewNumber = document.getElementById("review-number");
let reviewCounter = 0

function getReviews() {
    return JSON.parse(localStorage.getItem("reviews")) || 0;

}

function setReviewsMessage() {
    reviewCounter = getReviews();
    reviewNumber.textContent = `You have submitted ${reviewCounter} reviews.`;
}

setReviewsMessage();