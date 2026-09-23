import test from 'node:test';
import assert from 'node:assert';
import TypingEngine from './TypingEngine.js'; // Adjust this path if needed

test('Calculates 100% accuracy when all keystrokes are correct', () => {
  // 1. ARRANGE
  const engine = new TypingEngine();

  // 2. ACT
  // [YOUR TURN: Call the method to add a correct keystroke here]
  engine.addKeystroke("p", "p");
  engine.addKeystroke("m", "m");
  engine.addKeystroke("p", "q");
  engine.addKeystroke(",", ",");
  engine.addKeystroke("z", "e");
  engine.addKeystroke("s", "s");
  engine.addKeystroke("j", "l");
  
  // 3. ASSERT
  // [YOUR TURN: Use assert.strictEqual() to check if getAccuracy() returns "100.00"]
  assert.strictEqual();
});