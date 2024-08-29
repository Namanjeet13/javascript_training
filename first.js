// Arithmatic Operators
let a = 5;
let b = 2;

console.log(a)
console.log(b)
console.log("a + b = ", a + b);// Add
console.log("a - b = ", a - b);// Subtract
console.log("a * b = ", a * b);// Divide
console.log("a / b = ", a / b);// Multiply
console.log("a % b = ", a % b);// Modulus(gives us remainder)
console.log("a ** b = ", a ** b);// Exponential(a to the power b)

// Unary Operator
{
    // a++(Post)     a--(Post)
    // ++a(Pre)      --a(Pre)

    let a = 5; 
    let b =2;
    // a++; // = a + 1 
    console.log("a++ = ", a++)
    console.log("a = ", a)
    
    // b--; // = b - 1 
    console.log("a-- = ", a--)
    console.log("a = ", a)

    console.log("++a = ", ++a)
    console.log("--a = ", --a)
}

{
    // Assignment Operators
    let a = 5; 
    let b = 2;

    a += 4 // a = a + 4;
    // a -= 4
    // a *= 4
    // a /= 4
    // a **= 4 
    console.log(a);
}


{
    // Comparison Operators
    // Equal to ==         Equal to & type ===
    // Not equal to !=     Not Equal to & type !==
    // >, >=, <, <== 

    let a = 5; 
    let b = 2;
    let c = 5;
    let d = "5";


    console.log(a + " == " + b , a == b)
    console.log(a + " != " + b , a != b)
    console.log(a + " == " + c , a == c)
    console.log(a + " == " + d , a == d) // But d is a string here still it outputs true
    console.log(a + " === " + d , a === d) // So we will use more strict operator to check its type also matches and now it returns false

}

{
    // Logical Operators

    // Logical AND &&
    // Logical OR ||
    // Logical NOT !

    // cond1 | cond2 | Result(&&) | Result(||)
    //   T   |   T   |     T      |     T
    //   T   |   F   |     F      |     T
    //   F   |   T   |     F      |     T
    //   F   |   F   |     F      |     F

// NOT will print opposite boolean value


    let a = 6;
    let b = 5;

    let cond1 = a > b; //true
    let cond2 = a === 6; //true
    console.log("cond1 && cond2", cond1 && cond2); //true

    let cond3 = a > b; //true
    let cond4 = a === 5; //False
    console.log("cond3 && cond4", cond3 && cond4); //true
}