Function.prototype.curry = function(numArgs, ...curriedArgs)  {
  let args = [];
  args = args.concat(curriedArgs);
  let curriedFunction = (...argArray) => {
    args = args.concat(argArray);
    if (numArgs === args.length) {
      return this(...args);
    } else {
      return curriedFunction;
    }
  };

  return curriedFunction;
};

// 
// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
//
// sumThree(4, 20, 6); // == 30
//
// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30
//
// let f2 = sumThree.curry(3,4);
// console.log(f2(5,5));
// // or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30
//
// // let f = function() {console.log('hello');};
// // console.log(f);
// // console.log(f.curry(3)(2));
// // // console.log(f.curry(10)(2)(3)(4));
