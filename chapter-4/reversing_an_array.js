title('4.2: Reversing an array');

/*
Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.

Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter,
which variant do you expect to be useful in more situations? Which one is more efficient?
*/

// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
var reverseArray = function reverseArray(arr) {
    var arr2 = [];
    for(var a=0; a <= arr.length-1; a++) {
        arr2.unshift(arr[a]);
    }
    return arr2;
}

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
var reverseArrayInPlace = function reverseArrayInPlace(arr) {

    for(var a=0; a<=Math.floor((arr.length-1)/2); a++) {
        var x = arr[a];
        var y = arr[arr.length - 1 - a];
        arr[a] = y;
        arr[arr.length - 1 - a] = x;

    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);