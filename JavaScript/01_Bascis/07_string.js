// String are the collectins of characters.

// There are two type to declare a string.
 
// 1.by premetive datatype:
let name = "Username" // store the value of name(premetive datatype) in stack.
console.log(typeof name); // output: string
console.log(name[0]);

//2. To create a Object

const myName = new String("myname"); // That create an object in heap which reffer to myName.

console.log(typeof myName); // output: object

/*************************************************************** */

console.log(`The name of the user is ${name}`);