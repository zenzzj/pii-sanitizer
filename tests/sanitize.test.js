import { sanitize } from '../src/index';

describe('pii-sanitizer-js validation suite', () => {
    
    test('should mask email addresses correctly', () => {
        const input = "Contact us at support@company.com for help";
        const expected = "Contact us at [HIDDEN_EMAIL] for help";
        expect(sanitize(input)).toBe(expected);
    });

    test('should mask credit card numbers', () => {
        const input = "My card number is 4532-1122-3344-5566";
        const expected = "My card number is [HIDDEN_CREDIT_CARD]";
        expect(sanitize(input)).toBe(expected);
    });

    test('should mask phone numbers', () => {
        const input = "Call me at +1-555-0199";
        const expected = "Call me at [HIDDEN_PHONE]";
        expect(sanitize(input)).toBe(expected);
    });

    test('should handle multiple PII types in a single string', () => {
        const input = "Send the invoice to finance@dev.com or call 555123456";
        const result = sanitize(input);
        expect(result).toContain("[HIDDEN_EMAIL]");
        expect(result).toContain("[HIDDEN_PHONE]");
    });

    test('should not modify text without sensitive information', () => {
        const input = "This is a public message with no PII.";
        expect(sanitize(input)).toBe(input);
    });

    test('should be case-insensitive for email detection', () => {
        const input = "USER@EXAMPLE.ORG";
        const expected = "[HIDDEN_EMAIL]";
        expect(sanitize(input)).toBe(expected);
    });
});