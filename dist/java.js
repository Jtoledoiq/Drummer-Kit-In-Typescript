const divElements = document.querySelectorAll(".key");
const divElementsArr = Array.from(divElements)

const keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];

document.addEventListener("keydown", function(e) {
    if(`keyCodes.includes(${e.keyCode})`) {
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        key.classList.add("pressed")
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.play();
    }
})

document.addEventListener("keyup", function(e) {
    if(`keyCodes.includes(${e.keyCode})`) {
        document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove("pressed")
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.currentTime = 0;
        audio.pause();
    }
})