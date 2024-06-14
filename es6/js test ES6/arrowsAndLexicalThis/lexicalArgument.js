function square() {

  let example = () => {
    let numbers = [];
    for (let a in arguments) {
      console.log(a);
      numbers.push(a * a);
    }
    return numbers;
  }
  return example();

}

console.log(square(1, 2, 4))

