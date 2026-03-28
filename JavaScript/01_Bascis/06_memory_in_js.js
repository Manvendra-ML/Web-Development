// Two type of memory

// 1. Stack (for premetive data types)
/* the values of premetive datatypes simplly copied to the variable\
Any changes in new variable does not affect original values.
*/

let myName = "Username"
let yourName = myName

yourName = "yourName" // does not change the value of myName

console.log(myName); // Output: Usernam
console.log(yourName); // Output: yourname


// 1. Heap (for non-premetive data types)
/* non premetive datatypes stores in heap and variables just get their refrence to acces.
changes made via refrence actually change the actual value.
*/ 

let student1 = {
    name:"username",
    roll_no : 194
}
student2 = student1 //Here actually the refrence of student1 copied to student2.

student2.roll_no = 200 // actual value changed

console.log("the roll no. of student1 is: ",student1.roll_no); // Output: 200
console.log("the roll no. of student2 is: ",student2.roll_no); // Output: 200

