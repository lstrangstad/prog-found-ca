//Level 2

// question 1
for (var counter = 15; counter <= 25; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}

// question 2
  var innerFunction = function() {
    console.log("I am a function");
  }
  function outerFunction(arg) {

    arg()
  }
  outerFunction(innerFunction);
