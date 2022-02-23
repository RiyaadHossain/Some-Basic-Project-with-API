/* =============== Generate Quote =============== */
const genQuote = () => {
  const URL = "https://api.kanye.rest";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => printQuote(data));
};

const printQuote = (quote) => {
  document.getElementById("quote-box").value = quote.quote;
};

/* =============== Generate Quote ^ =============== */

/* =============== Make New Friend =============== */
const friendName = document.getElementById("fnd-name");
const friendLocation = document.getElementById("fnd-country");
const friendImg = document.getElementById("friend-img");
const makeFriend = () => {
  const URL = "https://randomuser.me/api/";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => printFriend(data));
};

const printFriend = (friend) => {
  const friendsss = friend.results[0];
  const name = `${friendsss.name.title} ${friendsss.name.first} ${friendsss.name.last}`;
  friendName.innerText = name;
  friendLocation.innerText = `${friendsss.location.country}`;
  friendImg.src = `${friendsss.picture.large}`;
};
/* =============== Make New Friend ^ =============== */

/* =============== World Tour =============== */
const tourLoc = document.getElementById("tour-location");
const flag = document.getElementById("flag");
const nextTour = () => {
  const URL = "https://restcountries.com/v3.1/all";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => printLocation(data));
};

const printLocation = (location) => {
  const random = Math.floor(Math.random() * 251);
  const country = location[random].name.common;
  const city = location[random].capital;
  tourLoc.innerText = ` ${city}, ${country}`;
  flag.src = location[random].flags.png;
};
/* =============== World Tour ^ =============== */


/* =============== Search Your Meal =============== */
const foodContainer = document.getElementById("food-container");

const hungryNaki = () => {
    const inputMeal = document.getElementById("input-meal").value;
    if (inputMeal.length === 0) {
        const img = document.createElement('img')
        img.classList.add('mx-auto')
        img.classList.add('mt-3')
        img.src = '../Image/noresult.svg'
        foodContainer.appendChild(img)
  } else {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => printMeal(data.meals));
      
  }
};

const printMeal = (food) => {
    foodContainer.textContent = "";
    console.log(food)
  food.forEach((element) => {
    //   console.log(element)
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("col");
    itemContainer.innerHTML = `
        <div onclick='details(${element.idMeal})' class="card">
            <img src="${element.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${element.strMeal}</h5>
              <p class="card-text">This recipi is a "${element.strCategory}" typed food which is originated from "${element.strArea}" region.</p>
            </div>
          </div>
        `;
    foodContainer.appendChild(itemContainer);
  });
};

const details = (foodItem) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodItem}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => printFoodItem(data));
};

const printFoodItem = (data) => {
  const foodItem = data.meals[0];
  const itemContainer = document.getElementById("item-details");
  itemContainer.textContent = "";
  const singleItem = document.createElement("div");
  singleItem.innerHTML = `
      <div class="card" style="width: 18rem">
            <img src="${
              foodItem.strMealThumb
            }" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${foodItem.strMeal}</h5>
              <p class="card-text">
              ${foodItem.strInstructions.slice(0, 100)}
              </p>
              <a href="${
                foodItem.strYoutube
              }" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
      `;
  console.log(foodItem);
  itemContainer.appendChild(singleItem);
};
