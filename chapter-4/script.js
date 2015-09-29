console.log('The sum of a range');

var arr = [];

var start;
var end;
var direction;

var range = function range(nr1, nr2, step) {
	
	// as of http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
	// the fastest way to clear an array is by setting an array's length to 0
	arr.length = 0;
	
	check(nr1,nr2);

	if (step && step!=0){
		// negative step
		if (step < 0) {
			for (var a = end; a >= start; a = a+step ) {
				arr.push(a);
			}
		}
		// positive step
		if(step > 0) {
			for (var a = start; a <= end; a = a-step ) {
				arr.push(a);
			}
		}
	// no step
	} else {
		for (var a = start; a <= end; a++ ) {
			arr.push(a);
		}
	}
	console.log(arr);
	return arr;
}

var check = function check(number1,number2){
	if(number1!=number2) {
		if (number1 < number2) {
			console.log('start is smaller than end');
			direction = 'up';
			start = number1;
			end = number2;
		}
		if (number1 > number2) {
			console.log('start is bigger than end');
			direction = 'down';
			start = number2;
			end = number1;
		}
	} else {
		console.log('your start is the same as the end!');
	}
	return(start, end);
} 

var sum = function sum(arr) {
  var x = 0;
  for (var a = 0; a <= arr.length -1; a++) {
    x = x + arr[a];
  }
  return x;
}

/*console.log(range(1,26,-4));
console.log('sum = '+sum(arr));

console.log(range(1,10));
console.log('sum = '+sum(arr));*/

console.log(range(10,1, 2));
/*console.log('sum = '+sum(arr));*/

/*
console.log('');
console.log('Reversing an array');
console.log('--------');


console.log('');
console.log('A list');
console.log('--------');

console.log('');
console.log('Deep Comparison');
console.log('--------');
*/
