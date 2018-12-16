"use strict" 

/* Copy each element of the first array into the second array, 
   in order. Begin inserting elements at index n of the second array.
   The input arrays should remain the same. */

function frankenSplice(arr1, arr2, n) {
	let copy = arr2;
	let end = copy.slice(n, copy.length);
	let add = copy.slice(0, n);

	for (let elem of arr1) {
		add.push(elem);
	}

	let result = add.concat(end);
	return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);



/* Return true if the string in the first element 
   of the array contains all of the letters 
   of the string in the second element of the array. */

function mutation(arr) {
	let zero = arr[0].toLowerCase();
	let one = arr[1].toLowerCase();

	for (let i = 0; i < one.length; i++) {
		if (zero.indexOf(one[i]) < 0)  {
			return false;
		} 
	} 
	return true;
}

mutation(["hello", "hey"]);



/* Split an array into groups the length of size 
   and return them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
	let newArr = [];

	for (let i = 0; i < arr.length; i += size) {
		let sliced = arr.slice(i, i + size);
		newArr.push(sliced);
	}
	return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



/* Return the symmetric difference of two arrays. */

function diffArray(arr1, arr2) {
	let newArr = [];
	let array = arr1.concat(arr2).sort();

	for (let item of array) {
		if (item !== array[array.indexOf(item) + 1]) {
			newArr.push(item);
		}
	}
	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



/* Find out if a number is a prime number. */

function isPrime(num) {

	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	} return num > 1;
}

isPrime(1001);



/* Reverse a string */

function reverse(str){
  let reversed = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

reverse('hi hello');

// or #2

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

// or #3

function reverse(str){
	if(str.length < 2) return str;

	return str.split("").reverse().join("");
}



/*


