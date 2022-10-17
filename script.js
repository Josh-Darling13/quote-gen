const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//get quote from API

async function getQuote(){
    /*
    'https://cors-anywhere.herokuapp.com/';

    */
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

    }catch(error){
        getQuote();
    }
}

//On Load
getQuote();