// Only change code below this line
class Person {
    constructor(message) {
        this._message = message;
    }
    static display() {
        var message = "Static method is invoked from Person class";
        return message;
    }
    show() {
        console.log("Static method is invoked from Person class");
    }
}
// Only change code above this line
var message = new Person(); 
message.show(); 

module.exports = Person;
