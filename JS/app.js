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

