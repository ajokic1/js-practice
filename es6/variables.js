if (true) {
  let a = 5;
  console.log(a);
}
console.log(a);

if (true) {
  var a = 3;
  console.log(a);
}
console.log(a);

const b = "immutable";
var c = "mutable";

try {
  b = "new value";
} catch (error) {
  console.error('Cannot assign new value to b');
}
c = "new value";

console.log(b);
console.log(c);

