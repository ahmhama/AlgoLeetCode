/* -------------------------------------------------------------------------- */
/*                                    Class                                   */
/* -------------------------------------------------------------------------- */

// class : is set of instructions to build specific type of object

// to Define a class we need to following things
// 1. class name
// 2. Data members (variables)
// 3. methods

/* -------------------------------------------------------------------------- */
/*                                   Syntax                                   */
/* -------------------------------------------------------------------------- */

class ClassName {
    constructor() { // Always add this method
        // constructor : is a function that is called when a new object is created
        // it is used to initialize object properties
        // if u have more than one constructor will return (SyntaxError)
    }
}



/* -------------------------------------------------------------------------- */
/*                                  important                                 */
/* -------------------------------------------------------------------------- */

//One important aspect of classes is, unlike function declarations, classes are hoisted.
//This means that you cannot create an object before accessing it, otherwise the code will throw a (ReferenceError).

/* -------------------------------------------------------------------------- */
/*                         to create object from class                        */
/* -------------------------------------------------------------------------- */
let nameObj = new ClassName(); //u must pass the class name



/* -------------------------------------------------------------------------- */
/*                                    super                                   */
/* -------------------------------------------------------------------------- */
// super : is used to access the parent class (inheritance)


/* -------------------------------------------------------------------------- */
/*                                    this                                    */
/* -------------------------------------------------------------------------- */
// this is use to for variety of different purpose but now we are using it reference to current object instance