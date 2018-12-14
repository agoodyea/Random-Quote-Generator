const quotes = [
    
    {quote: 'The present is theirs; the future, for which I really work, is mine.',
     source: 'Nikola Tesla'},

    {quote: 'When something is important enough, you do it even if the odds are not in your favor.',
     source: 'Elon Musk', citation:'60 minutes', year: 2015},

    {quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
     source: 'Franklin D. Roosevelt'},

    {quote: 'Good judgment comes from experience, and a lot of that comes from bad judgement.',
     source: 'Will Rodgers'},

    {quote: 'Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.',
     source: 'Eckhart Tolle', citation: 'The Power of Now', year: 1997}

    ]; 

const colors = ['#0066cc', '#cc2900', '#36b55c'];

var timer;

function getRandomColor (colorsArray) {
    let randomNum = Math.floor(Math.random() * colorsArray.length );
    return colorsArray[randomNum];
};

function changeTimer() {
    timer = window.setInterval(printQuote, 20000);
  };

// add the objects with quote, source, citation, and year properties

// create the random number function
// since there are five quote objects, the function needs to return a number between 0 - 4.
const getRandomQuote = array => { 
    let randomNum = Math.floor(Math.random() * array.length );
    return array[randomNum];
    };

// create the printQuote function. 
// This is the meat of the app. It uses the random function to pick a quote object.
// It will then modify the inner HTML of the page to display the quote.
function printQuote () {
    const randomQuote = getRandomQuote(quotes);
    let chosenQuote = "<p class='quote'>" + randomQuote.quote + "</p>";
    chosenQuote += "<p class='source'>" + randomQuote.source + "</p>";
    if (randomQuote.citation) {
        chosenQuote = chosenQuote.slice(0, -4);
        chosenQuote += "<span class='citation'>" + randomQuote.citation + "</span>";
        chosenQuote += "</p>"
    };
    if (randomQuote.year) {
        chosenQuote = chosenQuote.slice(0, -4);
        chosenQuote += "<span class='year'>" + randomQuote.year + "</span>";
        chosenQuote += "</p>"
    };
    document.body.style.background = getRandomColor(colors);
    document.getElementById('quote-box').innerHTML = chosenQuote;
};