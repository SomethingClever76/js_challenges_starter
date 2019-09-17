(function(){

    let startingPopulation = 200;
    let birthRate = 0.1;
    let numberOfWeeks = 10;

    // console.log (startingPopulation*Math.pow(birthRate+1, numberOfWeeks))
    console.log ("There will be "+Math.floor(startingPopulation*Math.pow(birthRate+1, numberOfWeeks))+" Cherokee Hares after "+numberOfWeeks+" weeks");

})();