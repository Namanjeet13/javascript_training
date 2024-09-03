// Functions

function myFunction() { // parameters
    console.log("Hello World!");
    console.log("This is my function.");
}

myFunction();

// Function with parameters

function myFunction2(msg) { // parameters
    console.log(msg);
}

myFunction2("Hello World!"); // arguments

// Function -> 2 numbers -> sum

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 10)); // arguments

// Arrow function

const addNumbersArrow = (num1, num2) => {
    num1 + num2
};

console.log(addNumbersArrow(5, 10)); // arguments

// Function with default parameter