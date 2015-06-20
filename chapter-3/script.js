console.log('minimum');
console.log('--------');

function minimum(x,y) {
	var z = Math.min(x,y);
	return z;
}

console.log(minimum(6,-10));


console.log('');
console.log('recursion');
console.log('--------');

function isEven(n){
	if((n==0 || n % 2 ==0) && n >= 0) {
		return 'even';
	} else {
		return 'uneven'
	}
}

console.log(isEven(8));

console.log('');
console.log('Bean counting');
console.log('--------');

function countBs(string) {
	var count = 0;
	for (var a = 0; a <= string.length -1; a++) {
		if (string.charAt(a) == "B") {
			count++;
		}
	}
	return count;
}

function countChar(string, letter) {
	var count = 0;
	for (var a = 0; a <= string.length -1; a++) {
		if (string.charAt(a) == letter) {
			count++;
		}
	}
	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4