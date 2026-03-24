const studentId = 12345
// the 'const' keyword used to create constant values that cannot be changed
//studentId = 2  // this gives error while we run
console.log(studentId);

let studentName = "Username" // let allow to create varaible that can be changed
console.log(studentName) 

var studentCity = "Jhansi"; // by keywork "var" we also create changable variable
console.log(studentCity)

studentBranch = "CSE" // changable variable
console.log(studentBranch)

/*
it is suggested to not use var or direct variable declartion.
beacause this create a problem with scope (we learn about scope later)
*/

console.table([studentName,studentId,studentCity,studentBranch])
// it print multiple variable in a table
