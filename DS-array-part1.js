//array: linear collection of different items
let students = ["vanshika", "swastik", "aanya"];
console.log(students); //print all the elements of array
console.log(students[1]); //swastik
console.log(students[4]);//undefined
console.log(students.length);//3
console.log(typeof students);//object

let info = ["vanshika", 21, 9.1]; //mixed array
console.log(info);
//empty array
let newArray = [];
console.log(newArray);//[]
console.log(newArray.length);//0
console.log(info[1]);//21
console.log(info[0][0]); //info[0]==vanshika; info[0][0]==0th index of vanshika that is v
console.log(info[0].length); //length of vanshika is 8
// console.log([].length);
// console.log([]);

//arrays are mutable
let fruits = ["apple", "mango", "litchi"];
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
fruits[5] = "papaya";
console.log(fruits);
// console.length(fruits[3]); //undefined
