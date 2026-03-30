// Merging arrays

const iits = ["IIT Roorkee", "IIT Kanpur", "IIT Bombay"]
const nits = ["NIT Warangal", "NIT Trichy", "NIT Allahbad"]

// iits.push(nits) // it add nits arrays as a new , single element in iits
// console.log(iits);

// to avoid this we use concat function

// const colleges = iits.concat(nits) // it merge all elements in both arrays and return a new array.

// // console.log(colleges);

// // If there are more than two arrays then we use the concept of spread.

// const new_array = [...iits, ...nits, ...colleges] // we can use wanted number of arrays to merge
// console.log(new_array);

const mixed_array = [1,2,3, [5,4], "string", true, ["mohan", [1,2], "ritesh"]]

// if we encounter with something like this we use flat function

const fixed_array = mixed_array.flat(Infinity) // infinity is the level to check (here we needed only 2 level)
console.log(fixed_array);
