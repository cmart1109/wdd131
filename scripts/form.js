const productsList = document.getElementById("products");
const submitButton = document.getElementById("submit");
let reviewCounter = 0

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function createProductOption() {
    products.forEach(product => {
        const option = document.createElement("option")
        option.textContent = product.name
        option.setAttribute("value", product.name);
        productsList.appendChild(option);
    });  
}

function addReview() {
    reviewCounter++
    setReviews();
    
}

submitButton.addEventListener("click", addReview)

function setReviews() {
    localStorage.setItem("reviews", JSON.stringify(reviewCounter));
}

function getReviews() {
    JSON.parse(localStorage.getItem("reviews")) || 0;

}



createProductOption();