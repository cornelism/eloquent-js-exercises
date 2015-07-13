console.log('The sum of a range');
console.log('--------');

var arr = [];

var range = function range(start, end) {
  for (var a = start; a <= end ; a++ ) {
    arr.push(a);
  }
  return arr;
}

var sum = function sum(arr) {
  var x = 0;
  for (var a = 0; a <= arr.length -1; a++) {
    x = x + arr[a];
  }
  return x;
}

console.log(range(1,10));
console.log(sum(arr));

console.log('');
console.log('Reversing an array');
console.log('--------');


console.log('');
console.log('A list');
console.log('--------');

console.log('');
console.log('Deep Comparison');
console.log('--------');
