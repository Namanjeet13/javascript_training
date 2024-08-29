// Conditional Statements

let age = 19

if (age >= 18) {
    console.log("you can vote");
} 
else {
    console.log("you cannot vote");
}

// odd or even
let num = 0;

if(num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

let mode = "blue";
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);

// Ternary Operators

let result = age >= 18 ? "adult" : "not adult";
console.log(result)