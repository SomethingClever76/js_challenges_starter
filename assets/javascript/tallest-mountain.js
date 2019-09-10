(function(){

    let Everest = 29029;
    let K2 = 28251;
    let Kangchenjunga = 28169;
    let Lhotse = 27940;
    let Makalu = 27838;
    let mountains = [Everest, K2, Kangchenjunga, Lhotse, Makalu];
    let tallesMountain;

    let WDYT = document.querySelector ("#WDYT");

    WDYT.addEventListener ("click", function () {

        let question = prompt("Which mountain is the tallest?")

        // Math.max (mountains);
        tallest = Math.max.apply(null, mountains);
        console.log (tallest)

        if(tallest == 29029 ){
            tallestMountain = "Everest"
        }

        if(question == tallestMountain){
            document.write("You're right!")
        }
    })
   
    // document.write("hello from tallest-mountain.js");

})();