function printReverse(array) {
  for(var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

function isUniform(array) {
  let test = array[0];
  for(var i = 1; i < array.length; i++) {
    if(array[i] !== test) {
      return false;
    }
  }
  return true;
}

function sumArray(array) {
  let total = 0;
  array.forEach(function(arrItem) {
    total += arrItem;
  })
  return total;
}

// should probably use a regular for loop here to prevent the first iteration
// comparing array[0] and array[0]
function max(array) {
  let max = array[0];
  array.forEach(function(arrItem) {
    if(arrItem > max)
    max = arrItem;
  })
  return max;
}

function myForEach(array, func) {
  for(var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

Array.prototype.myForEach = function (func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
};
}
