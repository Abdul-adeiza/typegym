export default class TypingEngine {
    #userKeystrokes;

    constructor() {
        this.#userKeystrokes = [];
    };

    addKeystroke(expectedChar, typedChar) {
        this.#userKeystrokes.push({ "expected": expectedChar, "typed": typedChar });
    };

    getAccuracy() {
        return (((this.#userKeystrokes.filter((keystroke) => keystroke.expected === keystroke.typed).length) / (this.#userKeystrokes.length)) * 100).toFixed(2);
    };

}


const typingAccuracy = new TypingEngine();

typingAccuracy.addKeystroke("o", "p");
typingAccuracy.addKeystroke("m", "m");
typingAccuracy.addKeystroke("p", "q");
typingAccuracy.addKeystroke(",", ",");
typingAccuracy.addKeystroke("z", "e");
typingAccuracy.addKeystroke("s", "s");
typingAccuracy.addKeystroke("j", "l");

console.log("Your typing accuracy is: " + typingAccuracy.getAccuracy());