class Rectangle {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }
  scale (value) {
    this.a *= value;
    this.b *= value;
  }
  print () {
    console.log(`Dimensions: ${this.a} x ${this.b}`);
  }
}

var Circle = function (radius) {
  this.radius = radius;
};
Circle.prototype.scale = function (value) {
  this.radius *= value;
};
Circle.prototype.print = function () {
  console.log(`Radius: ${this.radius}`);
}

console.log(Rectangle.prototype);
let rectangle = new Rectangle(2, 3);
rectangle.print();
rectangle.scale(2);
rectangle.print();

console.log(Circle.prototype);
var circle = new Circle(4);
circle.print();
circle.scale(2);
circle.print();
