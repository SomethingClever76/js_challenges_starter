(function(){

    let word = "javascript";
    let letter = "a";

    let char_count = (word.split(letter).length-1);

    // keeping comments for future reference
    // console.log (char_count);
    // console.log (char_count.length)
    // console.log (char_count.length-1)

    if (letter.length !== 1) {
    alert("Please enter a single letter.");
    } else if (word.includes(letter)) {
        console.log ("Yeah, the letter "+letter+" exists "+char_count+" times in my word.");
    } else {
        console.log ("Nope, that letter doesn't exist in my word");        
            }

})();