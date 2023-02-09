function keyPressed(e){
    // var buttonInnerHTML = this.innerHTML;
        // console.log(e.key);
    switch(e){
        case "w":
            var t1 = new Audio('sounds/tom-1.mp3');
            t1.play();
            break;

        case "a":
            var t2 = new Audio('sounds/tom-2.mp3');
            t2.play();
            break;
            
        case "s":
            var t3 = new Audio('sounds/tom-3.mp3');
            t3.play();
            break;

        case "d":
            var t4 = new Audio('sounds/tom-4.mp3');
            t4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        default:
            console.log(e);
            break;
    }
}

for(var i = 0; i < 7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        keyPressed(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(e){
    keyPressed(e.key);
    buttonAnimation(e);
});

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play()

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.'+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}