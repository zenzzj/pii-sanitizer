# PII Sanitizer JS

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
[![npm version](https://img.shields.io/npm/v/pii-sanitizer-js.svg?style=flat-square)](https://www.npmjs.com/package/pii-sanitizer-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A lightweight, high-performance utility for **detecting and anonymizing Personally Identifiable Information (PII)** in text.

Originally designed to sanitize prompts before they are sent to AI models (LLMs) or to clean log files before they are shared.

## Features

* **Smart Detection**: Identifies emails, credit cards, IPv4 addresses, and phone numbers.
* **Developed with Bun**: Take advantage of the speed of the most modern runtime.
* **Dual Interface**: Use it as a library in your code or as a CLI tool in your terminal.
* **No Dependencies**: Native, lightweight, and secure code.

## Installation

You can install it using NPM or Bun:

```bash
# Using NPM
npm install pii-sanitizer-js

# Using Bun
bun add pii-sanitizer-js
```

## Usage
As a Library (API)
Ideal for integrating into your Node.js applications or backend processes.

```javascript
import { sanitize } from ‘pii-sanitizer-js’;

const text = “Contact admin@mail.com or call +1 555-0199.”;
const sanitized = sanitize(text);

console.log(sanitized); 
// Output: “Contact [HIDDEN_EMAIL] or call [HIDDEN_PHONE].”
```

## Why this project

This project arose from the need to protect data privacy when interacting with third-party services and Artificial Intelligence APIs. It demonstrates the implementation of advanced regular expressions and data flow management in Node.js/Bun environments.

## Author

* **Zenzzj**:
  * Github: [@Zenzzj](https://github.com/zenzzj)
  * Discord: zen_xp