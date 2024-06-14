class Animal {
  constructor(name, breed, age) {
    this._name = name;
    this._breed = breed;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  get name() {
    return this._name;

  }
  get breed() {
    return this._breed;
  }

  set name(newName) {
    this._name = newName;
  }

  set breed(newBreed) {
    this._breed = newBreed;
  }
  // speak: function(){};
  speak() {
    console.log(`${this.name} makes a noise.`);
    return 'good';
  }

  // adding methods
  eat() {
    console.log(`${this.name} is eating`);
  }


}


class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, breed, age);
  }

  speak() {
    console.log(`${this.name} is barking`)
  }

}

const grape = new Dog('grape', 'BiXiong', 7);
grape.speak();
grape.eat();
console.dir(grape);

console.log('this is grape age ' + grape.age);
// age is a private property and it doesn't have getter and setters, so undefined is returned.
// let's try to give it a getter, but  not setter
// if you just give it getter, it won't work , as the age cannot be set as the first place
// let's try setter with out getter






// const dog = new Animal('black');
// console.dir(dog);

// console.log(dog.name);

// console.log(dog.speak);

// console.log(dog.speak());
// console.log(dog.eat());

