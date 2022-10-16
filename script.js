//get quote from API

async function getQuote(){
    const urlAPI = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jaon';
    try{
        const response = await fetch(urlAPI);
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.log('Whoops No Quotes', error);
    }
}



//On Load
getQuote();