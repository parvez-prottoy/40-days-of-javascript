/* 
- ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
- ✅ Task 2: Print the values to the console.
- ✅ Task 3: Try reassigning values to let and const variables and observe errors.
- ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

*/
let name = "Alice";
let age = 25;
let isStudent = true;
let favoriteLanguage = "JavaScript";
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Language:", favoriteLanguage);
age = 26; // Reassigning a let variable
name = "Bob";
isStudent = false;
favoriteLanguage = "Python"; // Reassigning a let variable

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  favoriteLanguage: "JavaScript",
};
const languages = ["JavaScript", "Python", "Java"];
console.log("Person Object:", person);
console.log("Languages Array:", languages);
