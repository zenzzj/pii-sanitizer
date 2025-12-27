import { PATTERNS } from './patterns.js';

export function sanitize(text, options = {}) {
    if (typeof text !== 'string') return '';
    
    let sanitizedText = text;
    const { placeholders = {} } = options;

    for (const [key, pattern] of Object.entries(PATTERNS)) {
        const label = placeholders[key] || `[HIDDEN_${key}]`;
        sanitizedText = sanitizedText.replace(pattern, label);
    }

    return sanitizedText;
}