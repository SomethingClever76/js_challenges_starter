(function(){

    let word = "javascript";
    let letter = "a";

    let char_count = (word.split(letter).length-1);

    // keeping comments for future reference
    // console.log (char_count); imagine that you have a piece of wood...
    // console.log (char_count.length); this would represent the number of pieces left after you "cut" your piece of wood.
    // console.log (char_count.length-1); this would represent the number of cuts you made.

    if (letter.length !== 1) {
    alert("Please enter a single letter.");
    } else if (word.includes(letter)) {
        console.log ("Yeah, the letter "+letter+" exists "+char_count+" times in my word.");
    } else {
        console.log ("Nope, that letter doesn't exist in my word");        
            }

})();