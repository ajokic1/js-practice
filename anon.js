const arr = [1, 2, 3, 4, 5];

const squared = arr.map(function (number) { 
  return number ** 2; 
});

console.log(squared);

(function (number1, number2) {
  console.log(number1 + number2);
})(2, 3);

const timesTwo = number => number * 2;

console.log(timesTwo(5));