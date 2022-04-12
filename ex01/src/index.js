// Only change code below this line
class Car {
    constructor(manufacturer, model, production) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.production = production;
    }
}
// Only change code above this line
const bmw = new Car("BMW", "BMW X3", 2003);
console.log(bmw.manufacturer); // "BMW"
console.log(bmw.model); // "BMW X3"
console.log(bmw.production); // "2003"

module.exports = Car;
