const person = {
  name: "arnob",
  age: "25",
  phone: "01222"
};

const table = {
  length: "200",
  height: "100"
};
print(person);

function print(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      //  console.log(key, element);
    }
  }
}
const array = [10, 2, 4, 5, 90];
array.forEach(element => {
  //console.log(element);
});

// cloning a object
const another = {};

for (key in person) another[key] = person[key];

//console.log(another);

// combining 2 or more object using object.assign() method
const combine = Object.assign({ friend: "aryan" }, person, table);
//console.log(combine);

//eassy method of cloning a object

const clone = { ...person };
//console.log(clone);

// initializing using factory method
let address = createAddress("a", "b", "c");
function createAddress(street, city, state) {
  return {
    street,
    city,
    state
  };
}
//console.log(address);

// initializing using constructor method
function Address(street, city, state) {
  this.city = city;
  this.street = street;
  this.state = state;
}
let address1 = new Address("a", "b", "c");

console.log(address1);
