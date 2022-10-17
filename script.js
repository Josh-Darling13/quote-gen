const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner(){
    quoteContainer.hidden = true;
    loader.hidden = false;
}

function hideLoadingSpinner(){
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

//get quote from API
async function getQuote(){
    showLoadingSpinner();
    const proxyURL = 'https://pure-sierra-31657.herokuapp.com/';
    const urlAPI = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyURL + urlAPI);
        const data = await response.json();
        if (data.quoteAuthor ===''){
            authorText.innerText = "--Unknown"
        } else {
            quoteText.innerText = data.quoteText;
        }
        /* reduce font size for long quotes.*/
        if (data.quoteText.length > 120){
            quoteText.classList.add('long-quote');
        } else {
            authorText.classList.remove('long-quote');
        }
        authorText.innerText = data.quoteAuthor;
        //stop loader show quote
        hideLoadingSpinner();
    }catch(error){
        console.log(error);
    }
}

function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} --${author}`;
    window.open(twitterURL, '_blank');
}

//event listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuote()