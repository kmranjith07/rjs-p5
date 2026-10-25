
 // Temperature Converter using map()

const celsius = [0, 20, 30, 40];

// Convert Celsius temperatures to Fahrenheit
// Formula: (C × 9/5) + 32

let fahrenheit = [];

fahrenheit = celsius.map(c => (c * 9 / 5) + 32);

// Do not modify this line
module.exports = fahrenheit;
