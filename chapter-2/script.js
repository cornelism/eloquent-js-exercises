console.log('triangle');
console.log('--------');

var string = "";
for(var a = 1; a <=7; a++) {
	var string = string + "#";
	console.log(string);
}
console.log('');
console.log('FizzBuzz');
console.log('--------');

for (var a = 1; a <= 100; a++) {
	if (a % 3 == 0 && a % 5 ==0) {
		console.log('FizzBuzz');
	} else if (a % 3 == 0){
		console.log('Fizz');
	} else if (a % 5 == 0){
		console.log('Buzz');
	} else {
		console.log(a);
	}
}

console.log('');
console.log('Chessboard');
console.log('--------');

var boardSize = 8;
for (var b = 1; b <= boardSize; b++){
	var string = "";
	for (var c = 1; c <= boardSize; c++){
		if(b%2==0){
			if(c % 2==0){
				string = string + "#";
			} else {
				string = string + " ";
			}
		} else {
			if(c % 2==0){
				string = string + " ";
			} else {
				string = string + "#";
			}
		}
	}
	console.log(string);
}