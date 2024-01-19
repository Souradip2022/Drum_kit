let button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
    document.querySelectorAll("button.instrument")
        [i].addEventListener("click", function () {

        let button_text = document.querySelectorAll("div.letter")[i].innerHTML;
        makeSound(button_text);

        buttonAnimation(button_text);
    });

    document.addEventListener("keypress", function (event) {
        makeSound(event.key);

        buttonAnimation(event.key);
    });
}

let makeSound = (event) => {
    if (event === "w") {
        let beat = new Audio("sounds/crash.mp3");
        beat.play();
    } else if (event === "a") {
        let beat = new Audio("sounds/kick-bass.mp3");
        beat.play();
    } else if (event === "s") {
        let beat = new Audio("sounds/snare.mp3");
        beat.play();
    } else if (event === "d") {
        let beat = new Audio("sounds/tom-1.mp3");
        beat.play();
    } else if (event === "j") {
        let beat = new Audio("sounds/tom-2.mp3");
        beat.play();
    } else if (event === "k") {
        let beat = new Audio("sounds/tom-3.mp3");
        beat.play();
    } else if (event === "l") {
        let beat = new Audio("sounds/tom-4.mp3");
        beat.play();
    }
};

let buttonAnimation = (event) => {
    if (
        event === "w" ||
        event === "a" ||
        event === "s" ||
        event === "d" ||
        event === "j" ||
        event === "k" ||
        event === "l"
    ) {
        document.querySelector("." + event).classList.add("box_shadow");
    }
    setTimeout(function () {
        document.querySelector("." + event).classList.remove("box_shadow");
    }, 200);
};