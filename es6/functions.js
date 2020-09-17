const someObject = {
  foo: 1
}

function someFunction() {
  console.log('Foo in function: ' + this.foo);

  const anotherObject = {
    foo: 2,
    bar: function () {
      console.log('Foo in anotherObject with normal function: ' + this.foo);
    }
  }
  anotherObject.bar();
}

function anotherFunction() {
  console.log('Foo in second function: ' + this.foo);

  const anotherObject = {
    foo: 3,
    bar: () => {
      console.log('Foo in anotherObject with arrow function: ' + this.foo);
    }
  };
  anotherObject.bar();
}

someFunction.call(someObject);
anotherFunction.call(someObject);