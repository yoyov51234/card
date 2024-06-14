function findOdd(A) {
  let obj = {};

  A.sort().forEach(item => obj[item] ? obj[item] = obj[item] + 1 : obj[item] = 1);


  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }

}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));