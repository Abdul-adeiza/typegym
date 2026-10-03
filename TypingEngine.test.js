import test from 'node:test';
import assert from 'node:assert';
import TypingEngine from './TypingEngine.js'; // Adjust this path if needed
import { spec } from 'node:test/reporters';

test('Calculates % accuracy for all keystrokes', () => {
  // 1. ARRANGE
  const engine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
  engine.addKeystroke("p", "p");
  engine.addKeystroke("m", "m");
  engine.addKeystroke("p", "p");
  engine.addKeystroke(",", ",");
  engine.addKeystroke("z", "z");
  engine.addKeystroke("s", "s");
  engine.addKeystroke("j", "j");
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual(engine.getAccuracy(), "100.00");
});


test('Calculates 0.00% accuracy when all keystrokes are incorrect', () => {
  // 1. ARRANGE
  const failEngine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
  failEngine.addKeystroke("o", "p");
  failEngine.addKeystroke("n", "m");
  failEngine.addKeystroke("y", "p");
  failEngine.addKeystroke(".", ",");
  failEngine.addKeystroke("q", "z");
  failEngine.addKeystroke("w", "s");
  failEngine.addKeystroke("r", "j");
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual(failEngine.getAccuracy(), "0.00");
});


test('Handles accuracy calculation when no keystrokes exist', () => {
  // 1. ARRANGE
  const noKeyEngine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
 
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual(noKeyEngine.getAccuracy(), "0.00");
});


test('Correctly counts the total number of keystrokes', () => {
  // 1. ARRANGE
  const totalKeyEngine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
  totalKeyEngine.addKeystroke("o", "p");
  totalKeyEngine.addKeystroke("n", "m");
  totalKeyEngine.addKeystroke("y", "p");
  
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual(totalKeyEngine.totalkeystroke(), "The total number of words typed is: 3");
});


test('Returns 0 WPM when no keystrokes or time exist', () => {
  // 1. ARRANGE
  const zeroKeyEngine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
 
  
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual(zeroKeyEngine.getWPM(), 0); 
});



test('Returns 0 WPM when start and end timers are called instantly', () => {
  // 1. ARRANGE
  const speedEngine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
  speedEngine.addKeystroke("o", "p");
  speedEngine.addKeystroke("n", "m");
  speedEngine.addKeystroke("y", "p");

  speedEngine.startTimer();
  speedEngine.endTimer();
  speedEngine.totalTimer();
  
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual(speedEngine.getWPM(), 0); 
});


test('Generates a valid drill as a text string', () => {
  // 1. Arrange
  const randomEngine = new TypingEngine();

  // 2. Act
  const randomDrill = randomEngine.generateDrill();

  // 3. Assert
  assert.strictEqual(typeof(randomDrill), "string");
});



test('Test for 50/50 split', () => {
  //1. Arrange
  const fifthyEngine = new TypingEngine();

  // 2. Act
  // Correct
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");
  fifthyEngine.addKeystroke("a", "a");

  // Incorrect
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");
  fifthyEngine.addKeystroke("a", "b");

  assert.strictEqual(fifthyEngine.getAccuracy(), "50.00");
});



test('Test for case sentivity', () => {

  // 1. Arrange
  const caseEngine = new TypingEngine();

  // 2. Act
  caseEngine.addKeystroke("a", "A");

  assert.strictEqual(caseEngine.getAccuracy(), "0.00")
});


test('Test for Blank Input', () => {
  // 1. Arrange
  const blankEngine = new TypingEngine();

  // 2. Act
  blankEngine.addKeystroke("", "");

  // 3. Assert
  assert.strictEqual(blankEngine.getAccuracy(), "100.00");
});



test('Test for special charcaters', () => {
  // 1. Arrange
  const specialEngine = new TypingEngine();

  // 2. Act
  specialEngine.addKeystroke(" ", " ");
  specialEngine.addKeystroke(",", ",");
  specialEngine.addKeystroke("\n", "\n");

  // 3. Assert
  assert.strictEqual(specialEngine.getAccuracy(), "100.00");
});


test('Test for High Volume Stress Test', () => {
  // 1. Arrange
  const volumeEngine = new TypingEngine();

  // 2. Act
  for (let i = 1; i <= 1000; i++) {
    volumeEngine.addKeystroke("a", "a");
  };

  // 3. Assert
  assert.strictEqual(volumeEngine.totalkeystroke(), "The total number of words typed is: 1000");
});



test('Test for exactly one word per minute', () => {
  //1. Arrange
  const oneEngine = new TypingEngine();

  //2. Act
  oneEngine.startTimer(1);
  oneEngine.addKeystroke("W", "W");
  oneEngine.addKeystroke("o", "o");
  oneEngine.addKeystroke("r", "r");
  oneEngine.addKeystroke("d", "d");
  oneEngine.addKeystroke("s", "s");
  oneEngine.totalkeystroke();
  oneEngine.endTimer(60001);
  oneEngine.totalTimer();

  //3. Assert
  assert.strictEqual(oneEngine.getWPM(), 1)
});