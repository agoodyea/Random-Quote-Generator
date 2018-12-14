let quotes = [
    
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

// add the objects with quote, source, citation, and year properties

// create the random number function
// since there are five quote objects, the function needs to return a number between 0 - 4.
const getRandomQuote = array => { 
    let randomNum = Math.floor(Math.random() * array.length ) 
    return array[randomNum]
    };

// create the printQuote function. 
// This is the meat of the app. It uses the random function to pick a quote object.
// It will then modify the inner HTML of the page to display the quote.