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

frankenSplice([1, 2, 3], [4, 5, 6], 1); // 4,1,2,3,5,6



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

mutation(["hello", "hey"]); // false



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

chunkArrayInGroups(["a", "b", "c", "d"], 2); // a,b,c,d



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

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // 4



/* Find out if a number is a prime number. */

function isPrime(num) {

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	} 
	return num > 1;
}

isPrime(1001); // false



/* Sum all the prime numbers up to and including a number. */

function isPrime(num){
  for(let i = 2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}


function sumPrimes(num) {
let sum = 0;

for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
        sum += i;
    } 
}  
return sum;
}

sumPrimes(10); // 17



/* Reverse a string */

function reverse(str){
  let reversed = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

reverse('hi hello'); // olleh ih

// or #2

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

reverse('hi hello'); // olleh ih

// or #3

function reverse(str){
	if(str.length < 2) return str;

	return str.split("").reverse().join("");
}

reverse('hi hello'); // olleh ih



/* Convert a string to spinal case */ 

function spinalCase(str) {
	return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap'); // this-is-spinal-tap



/* Return a n element in Fibonacci sequence */

function fib(n){
  let arr = [0, 1];

  for (let i = 2; i <= n; i++){
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

fib(8); // 21



/* Iterate through arr and remove each element starting from 
   the first element until the function returns true when
   the iterated element is passed through it. */

function dropElements(arr, func) {
    while(!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // 1,0,1



/* Flatten a nested array, accounting for varying levels of nesting. */

function steamrollArray(arr) {
	let flattened = [].concat(...arr);

	if (flattened.some(Array.isArray)) {
		return steamrollArray(flattened);
	}
	return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]); // 1,2,3,4



/* Convert a string from binary code to English. */

function binaryAgent(str) {
 let splitted = str.split(" ");
 let english = [];

 for(let i = 0; i < splitted.length; i++) {
   english.push(String.fromCharCode(parseInt(splitted[i], 2)));
      }
  return english.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // Aren't bonfires fun!?



/* Find the factorial of an integer. */ 

function factorial(num) { 
	let acc = 1;

	for (let i = num; i >= 1; i--) {
		acc *= i;
	}
	return acc;
}

factorial(7); // 5040



/* Find the length of longest word in a string. */

function longestWordLength(str) {
  let words = str.split(" ");
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }
  return max;
}

longestWordLength("Well this is probably a random sentence"); // 8



/* Fill in the object constructor with the following methods:
   getFirstName() getLastName() getFullName() setFirstName(first) 
   setLastName(last) setFullName(firstAndLast)*/

var Person = function(firstAndLast) {

	this.getFullName = function() {
		return firstAndLast;
	};

	this.getFirstName = function() {
		return firstAndLast.split(" ")[0];
	};

	this.getLastName = function() {
		return firstAndLast.split(" ")[1];
	};

	this.setFirstName = function(newName) {
		firstAndLast = newName + " " + firstAndLast.split(" ")[1];
	};

	this.setLastName = function(newName) {
		firstAndLast = firstAndLast.split(" ")[0] + " " + newName;
	};

	this.setFullName = function(newName) {
		firstAndLast = newName;
	};
};

var bob = new Person('Bob Ross');
bob.getFirstName();


