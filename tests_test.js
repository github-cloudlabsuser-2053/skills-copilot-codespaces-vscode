const { strict: assert } = require('assert');
const Calculator = require('./test.js');

// Test suite for Calculator
describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add two numbers correctly', () => {
        assert.equal(calculator.add(5, 3), 8);
        assert.equal(calculator.add(-2, 2), 0);
        assert.equal(calculator.add(0, 0), 0);
    });

    it('should subtract two numbers correctly', () => {
        assert.equal(calculator.subtract(5, 3), 2);
        assert.equal(calculator.subtract(3, 5), -2);
        assert.equal(calculator.subtract(0, 0), 0);
    });

    it('should multiply two numbers correctly', () => {
        assert.equal(calculator.multiply(5, 3), 15);
        assert.equal(calculator.multiply(-2, 3), -6);
        assert.equal(calculator.multiply(0, 5), 0);
    });

    it('should divide two numbers correctly', () => {
        assert.equal(calculator.divide(6, 3), 2);
        assert.equal(calculator.divide(-6, 3), -2);
        assert.equal(calculator.divide(0, 3), 0);
    });

    it('should throw an error when dividing by zero', () => {
        assert.throws(() => calculator.divide(5, 0), /Division by zero is not allowed/);
    });
});const Calculator = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers correctly', () => {
        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.add(-2, 2)).toBe(0);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('divides two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
});