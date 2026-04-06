// *******************Arrays***********************
// Array is index collectoion multiple data elements (which can be homogenous and hetrogenous in datatypes).
// in Javascript, Arrays have dynamic memory (size can be change, resizable arrays)

const arr = [1,2,3,4,5,"one","two", "three"];
console.log(arr);
console.log(typeof arr);
 
// different methode to declare arrays

const arr2 = new Array(1,2,3) // everything is same as above 

console.log(arr2[1]) // display the value at index 1(2nd position element) in arr2 array

//++++++++++++++++++++++++ Methods in Array +++++++++++++++++++++++++++++++++++++++++++++++++++++

arr.push(10) // add the given element after the last index.