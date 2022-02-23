/* =============== Generate Quote =============== */
const genQuote = () => {
    const URL = 'https://api.kanye.rest';
    fetch(URL)
    .then(response => response.json())
    .then(data => printQuote(data))
}

const printQuote = quote => {
    document.getElementById('quote-box').value = quote.quote
}

/* =============== Generate Quote ^ =============== */


/* =============== Make New Friend =============== */
const friendName = document.getElementById('fnd-name')
const friendLocation = document.getElementById('fnd-country')
const friendImg = document.getElementById('friend-img')
const makeFriend = () => {
    const URL = 'https://randomuser.me/api/'
    fetch(URL)
    .then(res => res.json())
    .then(data => printFriend(data))
}

const printFriend = (friend) => {
    const friendsss = friend.results[0]
    const name = `${friendsss.name.title} ${friendsss.name.first} ${friendsss.name.last}`
    friendName.innerText = name;
    friendLocation.innerText = `${friendsss.location.country}`
    friendImg.src = `${friendsss.picture.large}`
}
/* =============== Make New Friend ^ =============== */


/* =============== World Tour =============== */
const tourLoc = document.getElementById('tour-location')
const flag = document.getElementById('flag');
const nextTour = () => {
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
    .then(res => res.json())
    .then(data => printLocation(data))
}

const printLocation = location => {
    const random = Math.floor(Math.random() * 251);
    const country = location[random].name.common;
    const city = location[random].capital;
    tourLoc.innerText = ` ${city}, ${country}`
    flag.src =  location[random].flags.png;
}
/* =============== World Tour ^ =============== */


const hungryNaki = () => {
    const inputMeal = document.getElementById('input-meal').value
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`
    fetch(URL)
    .then(res => res.json())
    .then(data => printMeal(data))

}

const printMeal = (food) => {
    console.log(food.meals)
}