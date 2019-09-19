(function () {

    let amount = 93;
    let twenties = 0;
    let tens = 0;
    let fives = 0;
    let ones = 0;

    while (amount > 0) {
        if (amount > 20) {
            twenties++
            amount -= 20
        } else if (amount > 10) {
            tens++
            amount -= 10
        } else if (amount > 5) {
            fives++
            amount -= 5
        } else if (amount >= 1) {
            ones++
            amount -= 1
        }

    }
    let changeArray = [twenties, tens, fives, ones];
    console.log(changeArray);

})();