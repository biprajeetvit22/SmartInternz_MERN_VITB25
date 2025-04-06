// Task 1: Declare age and check if adult
let age = 25;
let isAdult = age >= 18;
console.log("------------------------------------------------------------");
console.log("Is adult:", isAdult);

// Task 2: Perform operations on x and y
let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("------------------------------------------------------------");
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);
console.log("------------------------------------------------------------");

// Task 3: Check if a number is even or odd
let n = parseInt(prompt("Enter a number to check even or odd:"));
let isEven = (n % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", isEven);

// Task 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("------------------------------------------------------------");
console.log("Array:", numbers);

// Task 5: Function to return square of a number
function square(num) {
    return num * num;
}
console.log("------------------------------------------------------------");
let numToSquare = parseInt(prompt("Enter a number to find its square:"));
console.log("Square of", numToSquare, "is:", square(numToSquare));
console.log("------------------------------------------------------------");
