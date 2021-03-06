/*global title*/
title('4.1: The sum of a range');

var arr = [];

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
var range = function range(nr1, nr2, step) {
	// as of http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript, the fastest way to clear an array is by setting an array's length to 0
	arr.length = 0;
	var a;
	var b = 0;	// step var for function

	//determine which direction the step is
	if (step && step!=1) {
		b = step;
	} else {
		b = 1;
	}

	if (b > 0 && nr1 < nr2) {
		for(a = nr1; a <= nr2; a=a+b) {
			arr.push(a);
		}
	} else if (b > 0 && nr1 > nr2) {
		for(a = nr2; a <= nr1; a=a+b) {
			arr.push(a);
		}
	// negative step
	} else if (b < 0 && nr1 > nr2) {
		for(a = nr1; a >= nr2; a=a+b) {
			arr.push(a);
		}
	} else if (b < 0 && nr1 < nr2) {
		for(a = nr2; a >= nr1; a=a+b) {
			arr.push(a);
		}
	}
	return arr;
};

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
var sum = function sum(arr) {
  var x = 0;
  for (var a = 0; a <= arr.length -1; a++) {
    x = x + arr[a];
  }
  return x;
};

console.log(sum(range(286,180,-17)));

/*global end*/
end();