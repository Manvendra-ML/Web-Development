// literals objects

const user = {
    name : "Manvendra",
    Age : 19,
    College : "Galgotias college of Engineering and Technology",
    Branch : "CSE-B"
}

// Two ways to acces objects properties

// // First method
// console.log(user.name);
// console.log(user.College);

// // Second method
// console.log(user["name"]); // since key are string so we have to write them in double quote (if key are number then its okay.)
// console.log(user["College"]); 

// Special Cases

const mySym = Symbol("name")

const newUser = {
    mySym: "manvendra",
    [mySym] : "IPS Manoj",
    "college" : "GCET"
}

// console.log(typeof newUser.mySym); // it is not a symbol its string 
// // To add and access Symbol we use brackets [] to distinguis Symbol.

// console.log(newUser[mySym]);

// // if we want to display the whole object we can:
// console.log(newUser); // Simple

// Basics operations on objects

// if we want to change the value of a particular key 

user.Branch = "Ece"
console.log(user["Branch"]);

// if we want to make object unchangable 

Object.freeze(user)
user.Branch = "Civil"
console.log(user["Branch"]);
