class DrumKit {
    elements: Array<HTMLDivElement>;
    keyCodes: Array<Number>;
    constructor() {
        const divElements: any = document.querySelectorAll(".key")
        this.elements = [...divElements] as Array<HTMLDivElement>;
        this.keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];


        this.playNotes();
    }

    private playNotes() {
        document.addEventListener("keydown", this.playNote);
        document.addEventListener("keyup", this.stopNote);

        console.log(this.elements)
    }

    private playNote(event: KeyboardEvent): void {
        if(`${this.keyCodes}.includes(${event.keyCode})`) {
            const key: HTMLDivElement = document.querySelector(`div[data-key="${event.keyCode}"]`) as HTMLDivElement;
            key.classList.add("pressed")
            const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
            audio.play();
        }
    }

    private stopNote(event: KeyboardEvent): void {
        if(`${this.keyCodes}.includes(${event.keyCode})`) {
            const key: HTMLDivElement = document.querySelector(`div[data-key="${event.keyCode}"]`) as HTMLDivElement;
            key.classList.remove("pressed")
            const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
            audio.currentTime = 0;
            audio.pause();
        }
    }
}


new DrumKit();