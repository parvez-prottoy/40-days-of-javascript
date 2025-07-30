// Pass by value example in JavaScript
// This code demonstrates how primitive values are passed by value in JavaScript.
// When a variable is assigned to another, it copies the value, not the reference.

let x = 10;
let y = 20;
x = y;
console.log(x);
console.log(y);
x = 30;
console.log(x);
console.log(y);

/* 
?Variables : Variables are used to store data values. In JavaScript, variables are containers for storing data values.
 - var: Functions scoped or globally scoped, can be re-declared and updated.
 - let: Block scoped, can be updated but not re-declared in the same scope.
 - const: Block scoped, cannot be updated or re-declared.
 - Global variables: Variables that are declared outside of any function or block, accessible from anywhere in the code.
 - Local variables: Variables that are declared inside a function or block, accessible only within that function or block.
*/

/*
?- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
?- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
*/
// ! Primitive data types store into a the stack memory, while non-primitive data types store into the heap memory.
