class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Toyota Car started");
    }

    stop() {
        console.log("Toyota Car stopped");
    }
}

let Fortuner = new ToyotaCar("fortuner", 10);
let Lexus = new ToyotaCar("lexus", 20);