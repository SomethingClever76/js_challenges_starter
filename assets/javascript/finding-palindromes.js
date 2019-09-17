(function(){

let word = "tattarrattat";
let wordReverse = word.split('').reverse().join('');
if (word === wordReverse) {
    console.log ("true");
} else {
    console.log ("false");
}

})();