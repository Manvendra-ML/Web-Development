"use strict"

let number = 10
let stringnumber = String (number) // it convert the number into string 

console.log(number,typeof number); // output :- number
console.log(typeof stringnumber); // output :- string 

let num = Number (stringnumber) // similliarly it convert string to number
console.log(num,typeof num); // output :- number

// NOTE: Number only take numeric value.
// if string has letter or anything other than number, it give NaN ( not a number) 
let string = "33ab"
let numberStr = Number (string)

console.log(numberStr, typeof numberStr);

// To conver a whole string into number we use "parseInt()"

let p_int = parseInt(string)
console.log(p_int, typeof p_int);




