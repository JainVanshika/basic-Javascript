//conditional statements(stmts)
//1. if stmt
console.log("before if stmt");
let ages = 22;
if (ages >= 18) {
  console.log("you can vote");
  if (ages >= 21) {
    console.log("you can drive");
  }
}

//2.else if stmt
let marks = 10;
if (marks >= 80) {
  console.log("A+");
} else if (marks < 80 && marks > 60) {
  console.log("A");
} else if (marks < 60 && marks > 33) {
  console.log("B");
} else if (marks < 33) {
  console.log("F");
}

//3.else stmt
if (ages == 23) {
  console.log("you can dance");
} else {
  console.log("not allowed");
}

// for good code we need to use all 3 stmts
//nested if-else
let mark = 75;
if (mark > 33) {
  console.log("pass");
  if (mark > 80) {
    console.log("O");
  } else {
    console.log("A");
  }
} else {
  console.log("F");
}
