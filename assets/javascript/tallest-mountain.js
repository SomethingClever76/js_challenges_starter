(function(){
    // OPTIONAL SOLUTION
    // function findMaxnumber (numberArray) {
    //     return Math.max (...numberArray);
    // }

    // let one = findMaxnumber ([1,2,3,4,5])
    // let two = findMaxnumber ([23, 464, 1023, 57])
    // let three = findMaxnumber ([11232,34,34646,242445])

    // console.log(one)
    // console.log(two)
    // console.log(three)

    let Everest = 29029;
    let K2 = 28251;
    let Kangchenjunga = 28169;
    let Lhotse = 27940;
    let Makalu = 27838;
    let mountains = [Everest, K2, Kangchenjunga, Lhotse, Makalu];

    let WDYT = document.querySelector ("#WDYT");

    WDYT.addEventListener ("click", function () {

        let question = prompt("Which mountain is the tallest?")

        tallest = Math.max.apply(null, mountains);
        console.log (tallest);

        if(tallest == 29029 ){
            tallestMountain = "Everest";
        }

        if(question == tallestMountain){
            document.getElementById("mountains").innerHTML = "You're right!";
            document.getElementById("mountains").style.color = "white";
            document.getElementById("mountains").style.textAlign = "center";
            document.getElementById("mountains").style.fontSize = "50px";
            document.getElementById("mountains").style.backgroundImage = "url(assets/images/mountainTop.jpg)";
            document.getElementById("mountains").style.backgroundSize = "100%";
        }
    })

})();