function curriedSum(numArgs) {
  let numbers = [];
  let total = 0;
  function _curriedSum(number) {
    console.log(number);
    console.log(numbers);
    numbers.push(number);
    if (numbers.length === numArgs) {
      numbers.forEach((el) => { total += el;});
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// 
// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56
