// question 1
var nameOfPerson = "Linus";

// question 2
var person = {
  name: "Bob",
  age: 24
};

// question 3
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock")
}

else {
  console.log("In stock");
}

// question 4
var numberArray = [1, 2, 3, 4, 5];
for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// question 5
for (var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

// question 6

for (var counter = 15; counter <= 25; counter++) {
  if (counter === 20) {
    console.log(counter);
  }
}

// question 7
var personId = [
  {
    name: "Alex",
    age: 23,
    alive: true
  },

  {
    name: "Henry",
    age: 97,
    alive: false
  }
];

for (var i = 0; i < personId.length; i++) {
  console.log(personId[i].age);
  console.log(personId[i].alive);
}

// question 8
function whatIDontLike(typeOfWeather) {
  console.log("I don't like " + typeOfWeather);
}

whatIDontLike("Rain");

// question 9
function numberSubtraction(numb1, numb2) {
  var total = numb1 - numb2;
  console.log(total);
}

numberSubtraction();

// question 10
var emptyArray = [];

function addArgumentToArray(animal) {
  emptyArray.push(animal);
}

addArgumentToArray("Dog");
