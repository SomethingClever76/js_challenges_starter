(function(){

    let word = "javascript";
    
    let answerArray = [];
    for (var i = 0; i < word.length; i++) {
     answerArray[i] = "_";
    }
    var remainingLetters = word.length;

    alert (answerArray.join(" "));

    let letter = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
             if (word[j] === guess) {
             answerArray[j] = guess;
             remainingLetters--;
             }
            }


    // document.write("hello from hangman-lite.js");

})();