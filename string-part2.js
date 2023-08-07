//slice
//syntax: str.slice(start index, end index);
let str4 = "ILOVECODING...";
console.log(str4.slice(1, 5)); //start index=1, end index =5, so slicing will go from 1-4 #LOVE
console.log(str4.slice(1)); //end index=string length
console.log(str4.slice(-4)); //total length 14-4=10 i.e 10 till end

//replace method
console.log(str4.replace("LOVE", "DO")); //IDOCODING...
//repeat method
console.log(str4.repeat(3));

//practice ques
//seperate the college part and replace L with T
let col = "ApnaCollege";
let newstr = col.slice(4).replace("l", "t");
console.log(newstr.replace("l", "t"));
//or
let newstr2 = col.slice(4).replace("l", "t").replace("l", "t");
console.log(newstr2);
