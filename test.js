class Calculator {
    // Adds two numbers
    add(a, b) {
        return a + b;
    }

    // Subtracts the second number from the first
    subtract(a, b) {
        return a - b;
    }

    // Multiplies two numbers
    multiply(a, b) {
        return a * b;
    }

    // Divides the first number by the second
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage
const calculator = new Calculator();

console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3));
console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3));
console.log("Division: 6 / 3 =", calculator.divide(6, 3));