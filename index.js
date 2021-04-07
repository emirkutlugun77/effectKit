var length = document.querySelectorAll(".drum").length;
for (var z = 0; z < length; z++) {
    document.querySelectorAll(".drum")[z].addEventListener("click", function() {
        var innerHTML = this.innerHTML;

        switch (innerHTML) {
            case "w":

                var sound = new Audio("sounds/crash.mp3");
                sound.play();
                break;
            case "a":
                var sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
            case "s":
                var sound = new Audio("sounds/snare.mp3");
                sound.play();
                break;
            case "d":
                var sound = new Audio("sounds/tom_1.mp3");
                sound.play();
                break;
            case "j":
                var sound = new Audio("sounds/tom_2.mp3");
                sound.play();
                break;
            case "k":
                var sound = new Audio("sounds/tom_3.mp3");
                sound.play();
                break;
            case "l":
                var sound = new Audio("sounds/tom_4.mp3");
                sound.play();
                break;
            default:
                break;
        }

    });
}
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "w":

            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom_1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom_2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom_3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom_4.mp3");
            sound.play();
            break;
        default:
            break;
    }
});

function playWdrum() {

    var sound = Audio("sounds/crash.mp3");
    sound.play();
}

function playBass() {
    var sound = Audio("sounds/kick-bass.mp3");
    sound.play();
}

function playSnare() {
    var sound = Audio("sounds/snare.mp3");
    sound.play();
}

function playTom1() {
    var sound = Audio("sounds/tom_1.mp3");
    sound.play();
}

function playTom2() {
    var sound = Audio("sounds/tom_2.mp3");
    sound.play();
}

function playTom3() {
    var sound = Audio("sounds/tom_3.mp3");
    sound.play();
}

function playTom4() {
    var sound = Audio("sounds/tom_4.mp3");
    sound.play();
}