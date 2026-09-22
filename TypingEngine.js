export default class TypingEngine {
    #userKeystrokes;
    #startTime;
    #endTime;
    #totalTime;

    constructor() {
        this.#userKeystrokes = [];
        this.#startTime = null;
        this.#endTime = null;
       this.#totalTime = null;
    };

    addKeystroke(expectedChar, typedChar) {
        this.#userKeystrokes.push({ "expected": expectedChar, "typed": typedChar });
    };

    totalkeystroke() {
        console.log("The total number of words typed is: " + this.#userKeystrokes.length);
    };

    getAccuracy() {
        return (((this.#userKeystrokes.filter((keystroke) => keystroke.expected === keystroke.typed).length) / (this.#userKeystrokes.length)) * 100).toFixed(2);
    };

    startTimer() {
        return this.#startTime = Date.now();
    };

    endTimer() {
        return this.#endTime = Date.now();
    };

    totalTimer() {
        return this.#totalTime = ((this.#endTime - this.#startTime)/60000);
    };

    getWPM() {
        return Math.round(((this.#userKeystrokes.length)/5) / this.#totalTime);
    };

}


const typingAccuracy = new TypingEngine();

typingAccuracy.startTimer();

typingAccuracy.addKeystroke("o", "p");
typingAccuracy.addKeystroke("m", "m");
typingAccuracy.addKeystroke("p", "q");
typingAccuracy.addKeystroke(",", ",");
typingAccuracy.addKeystroke("z", "e");
typingAccuracy.addKeystroke("s", "s");
typingAccuracy.addKeystroke("j", "l");


setTimeout( () => {
    typingAccuracy.endTimer();

    typingAccuracy.totalTimer();

    typingAccuracy.totalkeystroke();

    console.log("Your typing accuracy is: " + typingAccuracy.getAccuracy());

    console.log("The Words per Minutes is: " + typingAccuracy.getWPM());
}, 3000);











