// Merging arrays

const iits = ["IIT Roorkee", "IIT Kanpur", "IIT Bombay"]
const nits = ["NIT Warangal", "NIT Trichy", "NIT Allahbad"]

// iits.push(nits) // it add nits arrays as a new , single element in iits
// console.log(iits);

// to avoid this we use concat function

const colleges = iits.concat(nits) // it merge all elements in both arrays and return a new array.

console.log(colleges);
