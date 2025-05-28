const album = document.getElementById("album");
const button = document.querySelector('#menu');
const mainButton = document.querySelector('.main')
const oldButton = document.querySelector('.old');
const newButton = document.querySelector('.new')
const smallButton = document.querySelector('.small');
const largeButton = document.querySelector('.large');
const navigation = document.querySelector('.navigation');
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tegucigalpa Honduras Temple",
    location: "Tegucigalpa, Honduras",
    dedicated: "2013, March, 17",
    area: 28254,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878-main.jpg"
  },
  {
    templeName: "San Pedro Sula Honduras Temple",
    location: "San Pedro Sula, Honduras",
    dedicated: "2024, October, 13",
    area: 35818,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52518-main.jpg"
  },
  {
    templeName: "Salt Lake City Temple", 
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253020,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  }
];

function getCards(temples) {
  temples.forEach(temple => {
    let templeCard = document.createElement("div");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let size = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedication.textContent = `Dedicated: ${temple.dedicated}`;
    size.textContent = `${temple.area} ft sq`;
    img.setAttribute("src",temple.imageUrl);
    img.setAttribute("alt",temple.templeName);
    img.setAttribute("loading","lazy");

    templeCard.appendChild(name);
    templeCard.appendChild(location);
    templeCard.appendChild(dedication);
    templeCard.appendChild(size);
    templeCard.appendChild(img);
    album.appendChild(templeCard);
  });
}

button.addEventListener('click', () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});


function ClearGallery() {
  album.innerHTML = "";
}

function getMainTemples(templesArray) {
  ClearGallery();
  getCards(templesArray)  
}

function getOldTemples(templesArray) {
  ClearGallery();
  let newArray = templesArray.filter(temples => temples.dedicated.charAt(1) === "8");
  getCards(newArray);
}

function getNewTemples(templesArray) {
  ClearGallery();
  let newArray = templesArray.filter(temples => temples.dedicated.charAt(0) === "2");
  getCards(newArray);
}

function getSmallTemples(templesArray) {
  ClearGallery();
  let newArray = templesArray.filter(temples => temples.area < 10000);
  getCards(newArray);
}

function getLargeTemples(templesArray) {
  ClearGallery();
  let newArray = templesArray.filter(temples => temples.area >= 90000);
  getCards(newArray);
}

mainButton.addEventListener("click", () => getMainTemples(temples));
oldButton.addEventListener("click", () => getOldTemples(temples));
newButton.addEventListener("click", () => getNewTemples(temples));
smallButton.addEventListener("click", () => getSmallTemples(temples));
largeButton.addEventListener("click", () => getLargeTemples(temples));
document.addEventListener("DOMContentLoaded", () => {
  getMainTemples(temples);
})

