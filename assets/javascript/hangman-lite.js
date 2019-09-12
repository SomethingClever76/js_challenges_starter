(function(){

    let word = ["javascript", "html", "cascading", "spreadsheets"];
    let letter = prompt("Guess a letter");
    let WordDisplay = "";
    
    if (letter.length !== 1) {
    alert("Please enter a single letter.");
    } else if (word.includes(letter)) {
        console.log ("Yeah, the letter "+letter+" exists "+char_count(word, letter)+" times in my word.");
    } else {
        console.log ("Nope, that letter doesn't exist in my word");        
            }

    function initiateWordDisplay() {
        displayArray = [];
        for (x = 0; x < letterCount; x++) { 
           displayArray.push("_ ");
        }
        
        document.getElementById("WordDisplay").innerHTML = displayArray.join(" ");
    }

    function char_count(word, letter) {
        let letter_Count = 0;
        for (let position = 0; position < word.length; position++) {
        if (word.charAt(position) == letter) {
            letter_Count += 1;
        }
      }
      return letter_Count;
    }

})();