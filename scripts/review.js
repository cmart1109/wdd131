let reviewNumber = document.getElementById("review-number");
let reviewCounter;

function getReviews() {
    return JSON.parse(localStorage.getItem("reviews")) || 0;

}

function setReviewsMessage() {
    reviewNumber.textContent = `You have submitted ${reviewCounter} reviews.`;
}


reviewCounter = getReviews();
setReviewsMessage();
console.log(reviewCounter);