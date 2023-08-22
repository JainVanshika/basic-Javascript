const post = {
  username: "@vanshika.jain31",
  content: "this is my #first post",
  likes: 150,
  repost: 5,
  tags: ["@apnacollege", "@gfg"],
};
console.log(post);
// {
//   username: '@vanshika.jain31',
//   content: 'this is my #first post',
//   likes: 150,
//   repost: 5,
//   tags: [ '@apnacollege', '@gfg' ]
// }
console.log(post.username); //@vanshika.jain31
console.log(post["username"]); //@vanshika.jain31

//add update value
post.likes = 555;
post.username = "@vanshika";
console.log(post);
// {
//   username: '@vanshika',
//   content: 'this is my #first post',
//   likes: 555,
//   repost: 5,
//   tags: [ '@apnacollege', '@gfg' ]
// }
post.country = "india"; //update or add
console.log(post);
// {
//   username: '@vanshika',
//   content: 'this is my #first post',
//   likes: 555,
//   repost: 5,
//   tags: [ '@apnacollege', '@gfg' ],
//   country: 'india'
// }
post.tags = "5M";
console.log(post);
// {
//   username: '@vanshika',
//   content: 'this is my #first post',
//   likes: 555,
//   repost: 5,
//   tags: '5M',
//   country: 'india'
// }
delete post.country;
console.log(post);
// {
//   username: '@vanshika',
//   content: 'this is my #first post',
//   likes: 555,
//   repost: 5,
//   tags: '5M'
// }
