// For Loops

for (let i = 1; i <= 10; i++) {
    console.log("Namanjeet Singh")
}

// Calculate sum of first 1 to 5
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of first 5 natural numbers:", sum);

// While Loop (Condition will be checked before execution)
let i = 1;
while(i <= 5) {
    console.log("i=", i);
    i++;
}

// Do-While Loop (Condition will be checked after execution) (Will always execute at least once)
let j = 20;
do {
    console.log("j=", j);
    j++;
} while (j <= 10); // Output will be only 20

// for-of Loop (Iterates over iterable objects) (Array, String)
let str = "Namanjeet"
let size = 0;
for(let i of str) { // iterates over each character in the string
    console.log("i =", i);
    size++;
}

console.log("Size of the string:", size);

// for-in Loop (Iterates over enumerable properties of an object) (Object)
let student = {
    name: "Namanjeet", 
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student) { // iterates over each key in the object
    console.log("key =", key, "value =", student[key]); // access value using key
}