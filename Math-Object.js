//math object
//properties
console.log(Math.PI);
console.log(Math.E);

//methods
console.log(Math.abs(12));
console.log(Math.abs(-12));

console.log(Math.pow(2, 4));
//nearest smallest int value
console.log(Math.floor(12.842));
console.log(Math.floor(-12.842));
//nearest larger int value
console.log(Math.ceil(2.32));
console.log(Math.ceil(-2.32));

console.log(Math.random()); //random value between 0 and 1

//generate random integer from 1 to 10
let step1 = Math.random();
let step2 = step1 * 10; //we have multiplied by 10 bcoz range is till 10, if range was till 100 then we willmultiply it by 100
let step3 = Math.floor(step2);
let step4 = step3 + 1; //if we won't do +1 then the range will be 0-9
console.log(step4);
//or
console.log(Math.floor(Math.random() * 10) + 1);
