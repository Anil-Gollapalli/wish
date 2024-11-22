const quotes = [
    "A hundred hearts would be too few to carry all my love for you.",
    "You are my today and all of my tomorrows.",
    "Every love story is beautiful, but ours is my favorite.",
    "I still fall for you every day.",
    "Happy Anniversary to the love of my life!"
  ];
  
  let currentQuoteIndex = 0;
  
  function displayQuote() {
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = quotes[currentQuoteIndex];
  }
  
  function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote();
  }
  
  // Initialize with the first quote
  window.onload = displayQuote;