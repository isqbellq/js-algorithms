"use strict" 

/* You are given two arrays and an index.
   Use the array methods slice and splice to copy each element 
   of the first array into the second array, in order.
   Begin inserting elements at index n of the second array.
   Return the resulting array. The input arrays should 
   remain the same after the function runs. */

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



/* Write a function that splits an array (first argument)
   into groups the length of size (second argument) 
   and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
	let newArr = [];

	for (let i = 0; i < arr.length; i += size) {
		let sliced = arr.slice(i, i + size);
		newArr.push(sliced);
	}
	return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



/* Compare two arrays and return a new array with any 
   items only found in one of the two given arrays, 
   but not both. In other words, return the symmetric 
   difference of the two arrays. */

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