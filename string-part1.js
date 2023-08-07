let str = "    hello    ";
//trim method
console.log(str.trim()); //hello

//toUpperCase() and toLowerCase();
let str2 = "absg25s7dbDGH";
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

//string with argument
//indexof functionality
let str3 = "ILOVECODING";
console.log(str3.indexOf("LOVE")); //1
console.log(str3.indexOf("z")); //-1 bcoz z is not present
console.log(str3.indexOf("O")); //2 first occuring of O

//method chaning: chain 2 or more methods that we want to apply on string
let msg = "    hello    ";
console.log(msg.trim().toUpperCase());
