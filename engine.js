const userKeystrokes = [
    { expected: "c", typed: "c"}, // Correct
    { expected: "o", typed: "p"}, // Incorrect
    { expected: "n", typed: "n"}, // Correct
    { expected: "s", typed: "s"}, // Correct
    { expected: "t", typed: "r"} // Incorrect
]

const correctKeystrokes = userKeystrokes.filter((keystroke) => keystroke.expected === keystroke.typed).length;
console.log(correctKeystrokes);


const accuracyPercentage = (correctKeystrokes, userKeystrokes) => (correctKeystrokes/(userKeystrokes.length)) * 100;
console.log("The Accuracy Percentage is " + accuracyPercentage(correctKeystrokes, userKeystrokes) + "%");

const userSession = {
  username: "Bello",
  token: undefined,
  logout: () => console.log("Logging out...")
};

const flatPack = JSON.stringify(userSession);
console.log(flatPack);


const totalKeystrokes = 250;
const timeInMinutes = 1.5;

const calculateWPM = (totalKeystrokes, timeInMinutes) => (totalKeystrokes / 5) / timeInMinutes;
console.log("The Words per Minutes is " + Math.round(calculateWPM(totalKeystrokes, timeInMinutes)));