/* -------------------------------------------------------------------------- */
/*                                 Inheritance                                */
/* -------------------------------------------------------------------------- */

// JavaScript does not have classes like other languages.
// It uses the concept of prototypes and prototype chaining for inheritance.

function Person(name, age) {
    return `My ${name} is ${age} years old`;
}

console.log(Person.prototype); // will return obj  {constructor: ƒ}

//prototype : is inbuilt object where it associated with the functions by default, which can be accessible, modifiable, and create new variables and methods to it and share across all the instances of its constructor function


//function => all functions have a prototype property obj => prototype

/* -------------------------------------------------------------------------- */
/*                     When to use Prototype in JavaScript                    */
/* -------------------------------------------------------------------------- */


function Employee() {
    this.name = 'any name';
    this.role = 'QA';
}

var empObj1 = new Employee();
empObj1.salary = 30000;
console.log(empObj1.salary); // 30000

var empObj2 = new Employee();
console.log(empObj2.salary); // undefined

// to solve this problem we can use prototype



/* -------------------------------------------------------------------------- */
/*     How to add variables to an object using the Prototype in JavaScript    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Syntax                                   */
/* -------------------------------------------------------------------------- */
//ClassName.prototype.variableName = value;
