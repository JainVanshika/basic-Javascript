//continue with Ds-array-part2
//slice
let clr = color2.concat(color3); //['red', 'yellow', 'pink', 'green', 'orange', 'black']
console.log(clr);
console.log(clr.slice()); //print all elements
console.log(clr.slice(2)); //print from 2nd element onwars
console.log(clr.slice(2, 4)); //print 2nd nd 3rd element
console.log(clr.slice(-1)); //last element
console.log(clr.slice(-2)); //last 2 elements

//splice in arrays: remove/replace/add element in place
//splice(start,deletecount,item0...itemN)
//it make changes in original erray, but slice doesnt make changes in original array
let clr2 = color2.concat(color3); //['red', 'yellow', 'pink', 'green', 'orange', 'black']
console.log(clr2.splice(4)); //work as slice
console.log(clr2);
console.log(clr2.splice(0, 1)); //delete from 0th element nd count is 1
console.log(clr2);
clr2.splice(0, 1, "black", "blue"); //delete from 0th element nd count is 1 then add black and blue at 0th index
console.log(clr2);

//sort
let clr3 = color2.concat(color3); //['red', 'yellow', 'pink', 'green', 'orange', 'black']
console.log(clr3.sort());
//it won't work for numbers as it converts array into string first then sort acc to unicode


let xyz = ["c", "c++", "html", "js", "py", "java", "c#", "sql"];
console.log(xyz.reverse().indexOf("js")); //4
console.log(xyz.reverse().indexOf("js")); //3

//array refrences
//address in memory
//[1]===[1] or [1]==[1] => false
//[]===[] or []==[] => false
//let num=[1,2,3]
//here, num=refrence variable, it knows the address of all its elements
// exmaple
// let num1=[1];
// let num2=[1];
// num1's element is stored t diff location in memory and its address is stored in num1 and similar with num2
// thus js will return us false if we compare element of 2 diff arrays.
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2 == arr1);
arr2.push(4);
console.log(arr1);
console.log(arr1 == arr2);

//constant array
//we can perform operations on this array but can't declare new array element
const arr = [1, 2, 3];

//nested array
let narr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(narr);
console.log(narr[0]);
console.log(narr.length);
console.log(narr[0][0]);


