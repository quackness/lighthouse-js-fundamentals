//anonymous function

var isOdd = function (num) {
  return num % 2 !== 0
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

//easy function

function isOdd (num) {
  return num % 2 !== 0
}
console.log("4 is odd: " + isOdd(4));

//inline
var isOdd = function divide (num) {
  return num % 2 !== 0 };
  console.log("5 is odd: " + isOdd(5));
