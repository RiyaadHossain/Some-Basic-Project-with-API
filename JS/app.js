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
    console.log(friend.results[0])
}
/* =============== Make New Friend ^ =============== */