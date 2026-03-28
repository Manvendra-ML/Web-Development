// **********************Numbers*************************************

const num = 100; // premetive number

const score = new Number (100); // object of number

console.log(num , typeof num); // output: number.
console.log(score, typeof score); // output: object.

//************************Properties*********************************

console.log(score.toString()); // return a string
console.log("The lenght of the given number is: ",score.toString().length); // after converting in string we can also use methods of string

console.log(score.toFixed(2)); // return value after decimal point upto given parameter

// +++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-1)); // return its absolute value,  |-4|.
console.log(Math.round(46.7)); // round off the given value.
console.log(Math.ceil(46.2)); // round off the given value into greater value.
console.log(Math.floor(46.2)); // round off the given value into lower value.

console.log(Math.random()) // generates some random values.




