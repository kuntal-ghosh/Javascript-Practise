var a = 5; // pass by value, only value is coppied
var b = 10;
b = a;
console.log(b);

let obj1 = {
  a: 1,
  b: 2
}; /*pass by reference  , reference is coppied, 
so if change one object will affect other one*/
let obj2 = obj1;
obj2 = { a: 5 };
console.log(obj1);
console.log(obj2);

let obj3 = {
  // shallow cloning
  a: 1,
  b: 2,
  c: {
    d: 20
  }
};
let clone = JSON.parse(JSON.stringify(obj3)); // this is used to solve shallow cloning problem
obj4 = { ...obj3 }; // cloning is done using ... operator
obj3.a = 5; //value of a is not changed in obj4 because cloning is done
obj3.c.d = 40; /*value of d is not in obj4 because it's in another layer under obj3 
this is called shallow clonning */

console.log(obj4);
console.log(clone);
