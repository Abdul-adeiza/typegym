export default class TypingEngine {
    #userKeystrokes;
    #startTime;
    #endTime;
    #totalTime;
    #drills;

    constructor() {
        this.#userKeystrokes = [];
        this.#startTime = null;
        this.#endTime = null;
        this.#totalTime = null;
        this.#drills = [
            "const x = 10;",
            "let name = 'Bello';",
            "function add(a, b) { return a + b; }",
            "() => console.log('Hello');"
        ];
    };

    addKeystroke(expectedChar, typedChar) {
        this.#userKeystrokes.push({ "expected": expectedChar, "typed": typedChar });
    };

    generateDrill() {
        const randomNum = Math.random();
        const multipliedNum = randomNum * this.#drills.length;
        const chopper = Math.floor(multipliedNum);
        return this.#drills[chopper];
    };

    //The one line version of geenrateDrill() method
    /*
    generateDrill() {
    return this.#drills[Math.floor(Math.random() * this.#drills.length)];
}
    */

    totalkeystroke() {
        return "The total number of words typed is: " + this.#userKeystrokes.length;
    };

    getAccuracy() {
        if (this.#userKeystrokes.length === 0)
            return "0.00"
        else
            return (((this.#userKeystrokes.filter((keystroke) => keystroke.expected === keystroke.typed).length) / (this.#userKeystrokes.length)) * 100).toFixed(2);
    };

    startTimer(manualTime) {
        this.#startTime = manualTime || Date.now();
    };

    endTimer(manualTime) {
        this.#endTime = manualTime || Date.now();
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
