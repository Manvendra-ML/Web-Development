// *************************Date And Time **************************************

let myDate = new Date ();
console.log(myDate, typeof myDate); // it give date and type is object.
// but the given date and time are noot readable so we convert that into string.

console.log(myDate.toString()) // now its readable.

console.log(myDate.toDateString()) // this give only date
console.log(myDate.toTimeString()) // similliarly this give only time.

// There are different format to declare the date.

let d1 = new Date (2028, 0, 15) // (yyyy, mm, dd)
let d2 = new Date (2028, 0, 15, 5, 30) // (yyyy, mm, dd, hh, mm)

let d3 = new Date ( "01-18-2023");

console.log(d1.toString())
console.log(d2.toString())
console.log(d3.toString())

let mytimestamp = Date.now();

console.log(mytimestamp)
