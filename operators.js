//operators

//arithmetic operators:+,-,*,/
let e = 10;
let f = 5;
console.log(e + f);//15
console.log(e - f);//5
console.log(e * f);//50
console.log(e / f);//2
console.log(e % f);//0
console.log(e ** f);//100000

//unary operator
console.log(e++); //first value will print that is 10 then it will be incremented that is 11
console.log(++e); //it will first increment the value that is 11+1=12
console.log(e--); //first print the value that is 12 then decrement  in the backend that is 11
console.log(--e); // t will decrement the value that is 10

//assignment operator
// += -= *= /= %= **= <<= >>= &= ^= |=

// comparison operator
// > >= < <= == !=
let age = 18;
console.log(age > 18); //F
console.log(age >= 18);//T
console.log(age <= 18);//T
console.log(age < 18);//F
console.log(age == 18);//T
console.log(age != 18);//F

console.log(5 == "5"); //here values are compared and not the type =>T
//to compare both type and value, then we can use ===
console.log(5 === "5"); //F
console.log(5 === 5);//T
console.log(0 == " ");//T
console.log(0 === " ");//F
console.log(0 == false);//T
console.log(null == undefined);//T
console.log(0 === false); //F
console.log(null === undefined);//F

//comparison for non-number
//a-z a<b<c<d...
//A-Z A<B<C<D...
console.log("a" < "b"); //T
console.log("B" < "A");//F

//logical operators
// use to combine c=expressions
// && and
// || or
// ! not
