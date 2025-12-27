const PATTERNS = {
	EMAIL: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
 	CREDIT_CARD: /\b(?:\d[ -]*?){13,16}\b/g,
  	IPV4: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,
  	PHONE: /\b(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}\b/g
}

export function sanitize(text) {
	let sanitizedText = text;

	for (const [key, pattern] of Object.entries(PATTERNS)) {
		sanitizedText = sanitizedText.replace(pattern, `[HIDDEN_${key}]`);
	}

	return sanitizedText
}

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