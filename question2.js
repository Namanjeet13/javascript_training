// We are given array of marks of students. Filter out of the marks of students that scord 90+.

const studentsMarks = [85, 78, 92, 67, 88, 95, 82];

let number = studentsMarks.filter((mark) => {
    return mark >= 90;
})

console.log("Students with marks above 90",number); // Output: [92, 95, 98]

let n = Number(prompt("Enter a number"));

let numbersArray = [];

for (let i = 1; i <= n; i++) {
    numbersArray.push(i);
}

console.log(numbersArray);

numbersSum = numbersArray.reduce((prev, currentValue) => {
    return prev + currentValue;
})

console.log("Sum of numbers from 1 to", n, "is", numbersSum);

numbersProduct = numbersArray.reduce((prev, currentValue) => {
    return prev * currentValue;
});

console.log("Product of numbers from 1 to", n, "is", numbersProduct);