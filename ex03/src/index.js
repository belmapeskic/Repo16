// Only change code below this line
class Person {
    constructor(message) {
        this._message = message;
    }
    static display() {
        console.log("Static method is invoked from Person class");
    }
    show() {
        console.log("Static method is invoked from Person class");
    }
}
// Only change code above this line
var message = new Person(); 
message.show(); 

module.exports = Person;
