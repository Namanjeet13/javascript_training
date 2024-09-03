// map Creates a new array with the results of some operation. the value its callback returns are used to form new array.

let nums = [67, 52, 39];

let newArr = nums.map((val) => {
    return val;
})

console.log(newArr); // Output: [67, 52, 39]

// Filter creates a new array with all elements that pass the test implemented by the provided function.

let numArr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = numArr.filter((val) => {
    return val % 2 === 0;
})

console.log("even array", evenArr); // Output: [2, 4, 6]

// Reduce performs some operation & reduces the array to a single value. It returns that single value.

let arr1 = [1, 2, 3, 4, 5];

const output = arr1.reduce((prev, curr) => {
    return prev + curr;
});

console.log("Sum of array elements", output); // Output: 15

const output2 = arr1.reduce((prev, curr) => {
    return prev > curr ? prev : curr; // for smallest use < 
});

console.log("Highest number", output2);