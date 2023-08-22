
//favourite movie
const fav = "avatar";
let guess = prompt("enter the movie:");
while (fav != guess) {
  if (guess == "quit") {
    console.log("you quit");
    break;
  }
  // console.log("wrong guess, please try again");
  guess = prompt("please try again. enter the movie:");
}
if ((guess = fav)) {
  console.log("successfull guess");
}
