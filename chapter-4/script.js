/*console.log('The sum of a range');*/

var arr = [];
var start;
var end;

var direction;
var direction_step;

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
var range = function range(nr1, nr2, step) {
	// as of http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript, the fastest way to clear an array is by setting an array's length to 0
	arr.length = 0;
	var b = 0;

	//determine which direction the step is in order to reverse the array or not
	if (step && step!=1) {
		b = step;
	} else {
		b = 1;
	}

	console.log("b: "+ b);

	checkDirection(step);
	checkOrder(nr1,nr2,b);

	console.log("nr 1: "+nr1);
	console.log("nr 2: "+nr2);
	console.log("direction step: "+direction_step);
	console.log("direction numbers: "+direction);

	// if step is positive, order list up
	if(direction = 'up'){
	/*	for(var a = nr1; a <= nr2; a++) {
			console.log('up a');
			arr.push(a);
		}*/
	} else {
/*		for(var a = nr1; a >= nr2; a--) {
			console.log('up b');
			arr.push(a);
		}*/
	}

	// push numbers in array

/*	if (!step) {
		if(direction == 'up'){
			for(var a = nr1; a <= nr2; a++) {
				arr.push(a);
			}
		} else {
			for(var a = nr1; a >= nr2; a--) {
				arr.push(a);
			}
		}
	} else {
		if(step < 1) {

		}
	}*/

	return arr;
}

var checkDirection = function checkDirection(step){
	direction_step = '';
	if (step < 0) {
		direction_step = 'down';
	} else if (step > 0) {
		direction_step = 'up';
	} else {
		direction_step = 'up';
	}
	return direction_step;
}

var checkOrder = function checkOrder(number1,number2,step){
	//check if step is negative or positive and then determine what start and end is.

	if (step >= 1) {
		if (number1 < number2) {
			direction = 'up';
			start = number1;
			end = number2;

		} else if (number1 > number2) {
			direction = 'down';
			start = number2;
			end = number1;
		} else {
			console.log('your numbers are the same!');
		}

	} else if (step <= -1) {
		if (number1 < number2) {
			direction = 'down';
			start = number2;
			end = number1;
		} else if (number1 > number2) {
			direction = 'up';
			start = number1;
			end = number2;
		} else {
			console.log('your numbers are the same!');
		}
	}
}

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
var sum = function sum(arr) {
  var x = 0;
  for (var a = 0; a <= arr.length -1; a++) {
    x = x + arr[a];
  }
  return x;
}

console.log(range(500,18));