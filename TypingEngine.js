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
        return "The total number of words typed is: " + this.#userKeystrokes.length;
    };

    getAccuracy() {
        if (this.#userKeystrokes.length === 0)
            return "0.00"
        else
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
        if (this.#totalTime === 0 || this.#totalTime === null)
            return 0;
        else
            return Math.round(((this.#userKeystrokes.length)/5) / this.#totalTime);
    };

}
