//nesting or objects of objects
const info = {
  swastik: {
    age: 20,
    marks: [80, 85, 90],
    grade: "A",
  },
  vanshika: {
    age: 21,
    marks: [90, 85, 90],
    grade: "A+",
  },
  aanya: {
    age: 16,
    marks: [70, 75, 94],
    grade: "B",
  },
};
console.log(info.vanshika);
console.log(info.swastik.grade);
info.swastik.grade = "A++"; //update
console.log(info.swastik);

//array of objects
const classinfo = [
  {
    name: "vanshika",
    rollno: 301,
    grade: "A++",
  },
  {
    name: "swastik",
    rollno: 302,
    grade: "A+",
  },
  {
    name: "aanya",
    rollno: 303,
    grade: "A",
  },
];
console.log(classinfo[0]);
console.log(classinfo[1].name);
classinfo[0].gender = "female";
console.log(classinfo[0]);
