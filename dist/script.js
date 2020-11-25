"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DrumKit = /** @class */ (function () {
    function DrumKit() {
        var divElements = document.querySelectorAll(".key");
        this.elements = __spreadArrays(divElements);
        this.keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
        this.playNotes();
    }
    DrumKit.prototype.playNotes = function () {
        document.addEventListener("keydown", this.playNote);
        document.addEventListener("keyup", this.stopNote);
        console.log(this.elements);
    };
    DrumKit.prototype.playNote = function (event) {
        if (this.keyCodes + ".includes(" + event.keyCode + ")") {
            var key = document.querySelector("div[data-key=\"" + event.keyCode + "\"]");
            key.classList.add("pressed");
            var audio = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]");
            audio.play();
        }
    };
    DrumKit.prototype.stopNote = function (event) {
        if (this.keyCodes + ".includes(" + event.keyCode + ")") {
            var key = document.querySelector("div[data-key=\"" + event.keyCode + "\"]");
            key.classList.remove("pressed");
            var audio = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]");
            audio.currentTime = 0;
            audio.pause();
        }
    };
    return DrumKit;
}());
new DrumKit();
