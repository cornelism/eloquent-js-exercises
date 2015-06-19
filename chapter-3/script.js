console.log('minimum');
console.log('--------');

function minimum(x,y) {
	var z = Math.min(x,y);
	return z;
}

console.log(minimum(6,5));
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