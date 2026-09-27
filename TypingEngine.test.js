import test from 'node:test';
import assert from 'node:assert';
import TypingEngine from './TypingEngine.js'; // Adjust this path if needed

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
