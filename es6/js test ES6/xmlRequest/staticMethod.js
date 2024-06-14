class Animal {

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} is speaking`)
  }

  static createAnimal(name) {
    return new Animal(name);
  }
}


const a = Animal.createAnimal('xiaobao');
console.log(a.name)
