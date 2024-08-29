// Write a code which can give grades to students according to their scores:
//  90-100, A
//  70-89, B
//  60-69, C
//  50-59, D
//  0-49, F

let score = 55;
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
    console.log("Your Grade is, ", grade)
} else if (score >= 70 && score <= 89) {
    grade = "B";
    console.log("Your Grade is, ", grade)
}  else if (score >= 60 && score <= 69) {
    grade = "C";
    console.log("Your Grade is, ", grade)
}  else if (score >= 50 && score <= 59) {
    grade = "D";
    console.log("Your Grade is, ", grade)
} else {
    grade = "F"
    console.log("Your Grade is, ", grade)
}