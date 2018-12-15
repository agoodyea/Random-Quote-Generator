
// Variable --------------

const quotes = [
    
    {quote: 'The present is theirs; the future, for which I really work, is mine.',
     source: 'Nikola Tesla', category: 'Inspiration'},

    {quote: 'When something is important enough, you do it even if the odds are not in your favor.',
     source: 'Elon Musk', citation:'60 minutes', year: 2015, category: 'Inspiration'},

    {quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
     source: 'Franklin D. Roosevelt', category: 'Inspiration'},

    {quote: 'Good judgment comes from experience, and a lot of that comes from bad judgement.',
     source: 'Will Rodgers', category: 'Inspiration'},

    {quote: 'Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.',
     source: 'Eckhart Tolle', citation: 'The Power of Now', year: 1997, category: 'Spirituality'},

    {quote: 'Knowledge is like underwear. It is useful to have it, but not necessary to show it off.', 
     source: 'Bill Murray', category: 'Humor'},

    {quote: 'Before you criticize a man, walk a mile in his shoes. That way, when you do criticize him, you’ll be a mile away and have his shoes',
     source: 'Steve Martin', category: 'Humor'},

    {quote: 'The mind is everything. What you think you become.',
     source: 'Buddha', category: 'Spirtual'}

    ]; 

var colors = ['#0066cc', '#cc2900', '#36b55c'];

var timer;

// Functions --------------

// Returns a random color from colors array.
function getRandomColor (colorsArray) {
    var randomNum = Math.floor(Math.random() * colorsArray.length );
    return colorsArray[randomNum];
};

// sets timer to change background color after 20secs.
function changeTimer() {
    timer = window.setInterval(printQuote, 20000);
  };

// returns random quote from quotes.
function getRandomQuote (array) { 
    var randomNum = Math.floor(Math.random() * array.length );
    return array[randomNum];
    };


// This is the meat of the app. It uses the random function to pick a quote object.
// It will then modify the inner HTML of the page to display the quote with source.
// Also It tests for citation, year, and category propeties to add to the html string.
function printQuote () {
    var randomQuote = getRandomQuote(quotes);
    var chosenQuote = "<p class='quote'>" + randomQuote.quote + "</p>";
    chosenQuote += "<p class='source'>" + randomQuote.source + "</p>";
    if (randomQuote.citation) {
        chosenQuote = chosenQuote.slice(0, -4);
        chosenQuote += "<span class='citation'>" + randomQuote.citation + "</span>";
        chosenQuote += "</p>"
    };
    if (randomQuote.year) {
        chosenQuote = chosenQuote.slice(0, -4);
        chosenQuote += "<span class='year'>" + randomQuote.year + "</span>";
        chosenQuote += "</p>";
    };
    if (randomQuote.category) {
        chosenQuote = chosenQuote.slice(0, -4);
        chosenQuote += "<span class='category'>" + ' (' + randomQuote.category + ')' + "</span>";
        chosenQuote += "</p>";
    }
    document.body.style.background = getRandomColor(colors);
    document.getElementById('quote-box').innerHTML = chosenQuote;
};

// Future additional features
// - make it so no quote is shown more than once before all quotes are shown.
// - make is so no background color is shown twice in a row.
// - add fade transition between quotes.