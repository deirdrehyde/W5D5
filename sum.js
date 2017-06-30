function sum(){
  let total = 0;
  let newArray = Array.from(arguments);
  newArray.forEach((el) => { total += el;});
  return total;
}

function sumTwo(...args){
  let total = 0;
  args.forEach((el) => { total += el;});
  return total;
}

 // console.log(sumTwo(1, 2, 3, 4) === 10);
