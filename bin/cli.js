import { sanitize } from '../src/index.js';
import readline from 'readline';

const rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: false});

console.log('Prompt Sanitizer');
console.log('Paste or type your text here to clean it up: ')
let input = '';

rl.on('line', (line) => {
  if (line.trim() === '') {
  	rl.close();
  	return;
  }
  input += line + '\n'
});

rl.on('close', () => {
  const result = sanitize(input);
  console.log('\nSanitized Content');
  console.log(result);
  process.exit(0);
});