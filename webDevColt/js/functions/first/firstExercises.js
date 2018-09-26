function isEven(num) {
  if(num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isEven(4));
console.log(isEven(5));

function factorial(num) {
  if (num === 0) return 1;
  var total = num;
  for (var i = num -1; i >= 1; i--){
    total *= i;
  }
  return total;
}
console.log(factorial(4));
console.log(factorial(8));

function kebabToSnake(string) {
  return string.replace(/-/g, '_');
}

console.log(kebabToSnake("the-splits-are"));
