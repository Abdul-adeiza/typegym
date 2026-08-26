const userKeystrokes = [
    { expected: "c", typed: "c"}, // Correct
    { expected: "o", typed: "p"}, // Incorrect
    { expected: "n", typed: "n"}, // Correct
    { expected: "s", typed: "s"}, // Correct
    { expected: "t", typed: "r"} // Incorrect
]

const correctKeystrokes = userKeystrokes.filter((keystroke) => keystroke.expected === keystroke.typed).length;
console.log(correctKeystrokes);