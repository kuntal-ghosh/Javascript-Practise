const numers = [1, 2, 3, 4];
const courses = [{ id: 1, name: "a" }, { id: 2, name: "c" }];
console.log(numers.indexOf(6));

// console.log(numers.includes(3));

console.log(numers.indexOf(6) === -1);

let course = courses.find(course => course.name === "a");

console.log(course);
