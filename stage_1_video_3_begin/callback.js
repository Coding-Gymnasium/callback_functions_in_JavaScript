// function sayHello() { // as a function declaration
//const sayHello = function () { // as a function expression
//    console.log('Hello');
//}

function executeCallback(callback) {
  callback();
}

// Anonymous function
// executeCallback(function() { // inlining. Writing a function in line
//   console.log('Hello');
// });
executeCallback(() => console.log('Hello')); // As an arrow function.

// Print Goodbye
// executeCallback(function() {
//   console.log('Goodbye');
// });
executeCallback(() => console.log('Goodbye'));
