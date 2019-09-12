(function(){

    let coinFlipper = document.querySelector ("#coinFlipper");

    coinFlipper.addEventListener ("click", function() {
        let whatDoYouThink = prompt ("heads or tails?"); 
        if (Math.random() > .5) {
        console.log ("heads");
        document.getElementById ("imageContainer").style.backgroundImage = "url('assets/images/quarterHeads.png')";
        document.getElementById ("imageContainer").style.backgroundSize = "50%";
    } else {
        console.log ("tails");
        document.getElementById ("imageContainer").style.backgroundImage = "url('assets/images/quarterTails.png')";
        document.getElementById ("imageContainer").style.backgroundSize = "50%";
    }
    })
    
})();