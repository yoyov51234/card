
// regular function 
const a = function () {
  console.log('i like you very much ');
}

// arrow function with out a parameter 
const b = () => {
  console.log('i like you very much ');
}

// optimize 
const c = () => console.log('i like you very much!');

// with only one parameter
const d = money => money * 2;

// with multiple parameters, but single line of expression 
const e = (money, faxRate) => money * faxRate;

// with multiple parameters, but multiple line of expression 
const f = (money, faxRate) => {
  console.log('you are rich!')
  return money * faxRate;
}
