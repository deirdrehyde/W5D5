
Function.prototype.myBind = function(context, ...args) {
  return (...args2) => {this.apply(context, args.concat(args2));};
};

Function.prototype.myBindTwo = function(context) {
  let bindArgs = Array.from(arguments);
  let oldContext = this;
  return function() {
    oldContext.apply(bindArgs.shift(), bindArgs.concat(Array.from(arguments)));
  };
};
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// console.log(markov.says("meow", "Ned"));
// console.log(markov.says.myBindTwo(breakfast, "meow", "Kush")());
// console.log(markov.says.myBindTwo(breakfast)("meow", "a tree"));
// console.log(markov.says.myBindTwo(breakfast, "meow")("Markov"));
//
// const notMarkovSays = markov.says.myBindTwo(breakfast);
// console.log(notMarkovSays("meow", "me"));
