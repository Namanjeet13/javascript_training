// Object
const student = {
    fullName : "Namanjeet",
    age : 19,
    cgpa : 8.2,
    isPass : true
}

student["age"] = student["age"] + 1; // Can Change any Key

console.log(student);
console.log(student["fullName"]); // Accesing key in Object
console.log(student.fullName); // Accesing key in Object
console.log(student.age);