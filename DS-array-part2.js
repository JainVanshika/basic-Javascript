//array methods
//push,pop,shift(delete from start and return it),unshift(add to start)
let cars = ["audi", "ford", "toyota"];
console.log(cars);
cars.push("maruti");
console.log(cars);
cars.pop();
console.log(cars);

//to enter or delete the element in starting
cars.unshift("suv");
console.log(cars);
cars.shift();
console.log(cars);

//indexOf
let color = ["red", "yellow", "pink"];
console.log(color.indexOf("pink")); //2
console.log(color.indexOf("PINK")); //-1
console.log(color.indexOf("green")); //-1
//includes
console.log(color.includes("red"));
console.log(color.includes("green"));

//concat
let color2 = ["red", "yellow", "pink"]; //true
let color3 = ["green", "orange", "black"]; //false
console.log(color2.concat(color3)); //['red', 'yellow', 'pink', 'green', 'orange', 'black']
//reverse
console.log(color2.reverse()); //pink yellow red
console.log(color2); //reverse will make chnage in original array also
