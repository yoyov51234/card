function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };


  this.delayedGreeting = function () {
    setTimeout(() => {
      // Arrow function captures 'this' from the enclosing function scope
      console.log(`Hello, my name is still ${this.name}`);
    }, 1000);
  };
}

const person = new Person('Alice');
person.sayHello(); // "Hello, my name is Alice"
person.delayedGreeting(); // "Hello, my name is still Alice" (after 1 second)