// Only change code below this line
class Microsoft {
    constructor(name) {
        this.name = name;
    }
     // getter
     get name() {
        return this._name;
    }
    // setter
    set name(newName) {
        this._name = newName;
    }
    occupation() {
        return `${this.name} is philantropist!`
    }
}
class Facebook extends Microsoft {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }
}
// Only change code above this line
let henry = new Microsoft("William Henry Gates III"); // Change this line
console.log(henry.occupation()); 
let elliot = new Facebook("Mark Elliot Zuckerberg", 23); // Change this line
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
    Microsoft,
    Facebook
}
