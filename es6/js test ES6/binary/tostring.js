function nextHigher(n) {
  if (n.toString(2).split('').filter(item => item === '1').length === 1) {
    let b = n.toString(2).split('').reverse();
    const index = b.findIndex(item => item === '1');

    console.log(b);
    return n;
  }
  else {
    let b = n.toString(2).split('').reverse();
    const index = b.findIndex(item => item === '0');
    b.splice(index, 2, "1", "0");
    b = b.reverse().join("");
    b = parseInt(b, 2);
    return b;
  }
  //   return 0
}

console.log(nextHigher(128));
// 1 0 0 0,  0 0 0 0
