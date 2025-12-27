# 🛡️ PII Sanitizer JS

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
[![npm version](https://img.shields.io/npm/v/pii-sanitizer-js.svg?style=flat-square)](https://www.npmjs.com/package/pii-sanitizer-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM Downloads](https://img.shields.io/npm/dm/pii-sanitizer-js.svg?style=flat-square)](https://www.npmjs.com/package/pii-sanitizer-js)

A lightweight, **zero-dependency**, high-performance utility for detecting and anonymizing Personally Identifiable Information (PII) in text.

> **Ideal for:** Sanitizing prompts before sending them to LLMs (OpenAI, Claude), cleaning log files, and ensuring GDPR/data privacy compliance in backend services.

## 🚀 Key Features

* **Zero Dependencies**: No bloated node_modules. Native, fast, and secure.
* **High Performance**: Optimized regex patterns for real-time sanitization.
* **Bun-First**: Built with Bun for maximum speed, fully compatible with Node.js.
* **AI-Ready**: Designed to prevent data leakage in AI-integrated applications.

## 📊 Supported Data Types

| Type | Tag Replacement | Example Detection |
| :--- | :--- | :--- |
| **Email** | `[HIDDEN_EMAIL]` | `user@example.com` |
| **Phone** | `[HIDDEN_PHONE]` | `+1 555-0199`, `(123) 456-7890` |
| **Credit Card** | `[HIDDEN_CARD]` | `4532 XXXX XXXX XXXX` |
| **IPv4 Address** | `[HIDDEN_IP]` | `192.168.1.1` |

## 📦 Installation

```bash
# Using npm
npm install pii-sanitizer-js

# Using bun
bun add pii-sanitizer-js
```

## 🛠️ Usage

As a Library
Integrate it easily into your middleware or data processing pipeline.

```javascript
import { sanitize } from 'pii-sanitizer-js';

const input = "Send the invoice to john.doe@provider.com or call 555-012-345. My IP is 10.0.0.5";
const cleanText = sanitize(input);

console.log(cleanText);
// Output: "Send the invoice to [HIDDEN_EMAIL] or call [HIDDEN_PHONE]. My IP is [HIDDEN_IP]"
```

## 🔒 Privacy First
All sanitization is performed **locally**. No data is ever sent to external servers. This is a pure string-manipulation utility designed to be safe for production environments.

## 🛠️ Motivation
When working with LLMs (like OpenAI or Claude), it's easy to accidentally leak sensitive data in prompts. I built this to have a lightweight, zero-dependency way to scrub text before it leaves my infrastructure.

## 🤝 Contributing
Contributions are welcome! If you find a bug or want to support a new PII type (like IPv6 or specific ID formats), feel free to:

1. **Fork** the project.
2. **Create** your feature branch.
3. **Open** a Pull Request.

---
Developed with ❤️ by **David (Zenzzj)** [GitHub](https://github.com/zenzzj) • [Discord](https://discord.com/users/925137666331246653)