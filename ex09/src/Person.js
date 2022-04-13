class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        var personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}

var personInfo = new Person("belma", "belma.peskic@gmail.com", 32); // Change this line
console.log(personInfo.getPerson());

module.exports = Person;