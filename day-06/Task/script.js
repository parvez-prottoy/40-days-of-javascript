/* 

## 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
Formula: (Celsius * 9/5) + 32 = Fahrenheit

*/

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(60));

/* 

## 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

*/

function findMax(num1, num2) {
  if (num1 > num2) {
    return "The max number is " + num1;
  } else {
    return "The max number is " + num2;
  }
}

console.log(findMax(-10, -9));
