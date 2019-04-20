// RANDOM ALGORITHMS

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

let Person = function(firstAndLast) {

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

let bob = new Person('Bob Ross');
bob.getFirstName();



/* Return a new array that transforms the elements' average 
   altitude into their orbital periods. */

function orbitalPeriod(arr) {
	let GM = 398600.4418;
	let earthRadius = 6367.4447;

	for (let item of arr) {
		let period = Math.round(2 * Math.PI * Math.sqrt(Math.pow(item.avgAlt + earthRadius, 3) / GM));
		delete item.avgAlt;
		item.orbitalPeriod = period;
	}

	return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // [{name: "sputnik", orbitalPeriod: 86400}]



/* Find out if a string is a palindrome, making sure to 
   ignore all symbols, spaces, and punctuation. */

function palindrome(str) {

	return str.replace(/[\W_]/g, "").toLowerCase() === str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
}

palindrome("eye"); // true

// or #2

function palindrome(str) {
	str = str.replace(/[\W_]/g, "").toLowerCase();
	let letters = str.length - 1;

	for (let i = 0; i < letters/2; i++) {
		if (str[i] !== str[letters - i]) {
			return false;
		}
	}
	return true;
}

palindrome("eye"); // true

// or #3

function palindrome(str) {
  let start = 0
  let end = str.length - 1

  while (end > start) {
    if (str[start].match(/[\W_]/)) {
    	start++;
      continue;
    }
    if (str[end].match(/[\W_]/)) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    
    start++;
    end--;
  }
  
  return true;
}



/* Convert a number into a roman numeral. */

function convertToRoman(num) {

  let decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanNumeral = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];  	let roman = "";

  for (let index = 0; index < decimal.length; index++) {
    while (decimal[index] <= num) {
     roman += romanNumeral[index];
     num -= decimal[index];
   }
 }
 return roman;
}

convertToRoman(36); // XXXVI



/* Take a ROT13 encoded string as input and return a decoded 
   string. Letters are shifted by 13 places. */

function rot13(str) { 
	return str.replace(/[A-Z]/g, letter => String.fromCharCode((letter.charCodeAt(0) % 26) + 65));
}

console.log(rot13("LBH QVQ VG!")); // YOU DID IT!

// or #2

function rot13(str) {
  let string = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = char.charCodeAt(0);

    if (char.match(/[A-Z]/)) {
      if (code > 77) {
        char = String.fromCharCode(code - 13);
      } else {
        char = String.fromCharCode(code + 13);
      }
    }
    string += char;
  }
  return string;
}

console.log(rot13("LBH QVQ VG!")); // YOU DID IT!


/* Find the hamming distance between two strings */

function hammingDistance(a, b) {
  let distance = 0;

  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        distance += 1;
      }
    }
  }
  return distance;
}

console.log(hammingDistance("teeth", "reach")); // 3


/* Find the sum of all the multiples of 3 or 5 below 1000 */

function sum(number) {
  let total = 0;

  for (i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(sum(10)); // 233168


// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fib(number) {
  let sum = 0; 
  let fibonacci = [0, 1];

  for (i = 2; i <= number; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      
    if (fibonacci[i] % 2 === 0) {
      sum += fibonacci[i];
    }
  }
  return sum;
}

console.log(fib(4000000)); 


// Find the largest prime factor of the number 600851475143 

function largestPrime(number) {
    let i = 2;
    let largest = 1;

    while (i <= number) {
      if (number % i === 0) {
        largest = i;
        number = number /= i;
      } 
      else i++;
    } 
    return largest;
}

console.log(largestPrime(600851475143));
