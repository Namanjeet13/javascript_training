class Person {
    constructor() {
        console.log('Enter Parent constructor');  // constructor of parent class
        this.species = 'Homo Sapiens';
    }
    eat() {
        console.log('eat');
    }

    sleep() {
        console.log('sleep');
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log('Enter Child constructor');  // constructor of child class
        super(); // to invoke parent class constructor
        this.branch = branch;
        console.log("exit Child constructor");
    }
    work() {
        console.log('solve problems, build something');
    }
}

let engObj = new Engineer('Computer Science');