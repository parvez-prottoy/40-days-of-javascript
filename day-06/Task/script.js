/* 

## 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
Formula: (Celsius * 9/5) + 32 = Fahrenheit

*/

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
const result1 = celsiusToFahrenheit(60);
console.log(result1);
