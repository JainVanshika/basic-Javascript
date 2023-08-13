//object literals
const student = {
  name: "vanshika",
  age: 21,
  marks: 87,
};
const item = {
  price: 100.65,
  discount: 50,
  color: ["red", "pink"],
};

//twitter post
//create an obj literal for the properties of twitter post which includes:
//username,content,likes,reposts,Tags.
const post = {
  username: "@vanshika.jain31",
  content: "this is my #first post",
  likes: 150,
  repost: 5,
  tags: ["@apnacollege", "@gfg"],
};
console.log(post);
console.log(post.username);
console.log(post["username"]);

//add update value
post.likes = 555;
post.username = "@vanshika";
console.log(post);
post.country = "india"; //update or add
console.log(post);
post.tags = "5M";
console.log(post);
delete post.country;
console.log(post);
