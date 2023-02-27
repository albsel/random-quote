// DOM Elements
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");

// URL from API
const apiUrl = "https://api.quotable.io/random";

// Get data from API
async function getQuote() {
  try {
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;

    const response = await fetch(apiUrl);
    const data = await response.json();

    quoteEl.innerText = data.content;
    authorEl.innerText = "~ " + data.author;

    btnEl.innerText = "get a quote";
    btnEl.disabled = false;
  } catch (error) {
    quoteEl.innerText = "An error occured, try again later!";
    authorEl.innerHTML = `<img class="emoji-img" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_large.png?v=1571606089"></img>`;
  }
}
getQuote();

// Event Handler
btnEl.addEventListener("click", getQuote);
