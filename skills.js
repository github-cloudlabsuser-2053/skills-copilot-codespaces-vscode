// function to convert Celcius to Fahrenheit
function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

// Driver code
let celcius = 25;
let fahrenheit = celciusToFahrenheit(celcius);
console.log(`${celcius}°C is equal to ${fahrenheit}°F`);