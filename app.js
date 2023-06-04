//                             task-1

function uniqueInOrder (iterable) {
	let result = []
	for(let i in iterable) {
		if(iterable[i] != iterable[i-1]) 
		result.push(iterable[i])
	}
	return result
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//                               task-2

function getMiddle (s) {
	let result;
	if (s.length % 2 == 0) {
		result = s.substring(s.length / 2 - 1, s.length / 2 + 1);
} else {
	result = s.substring(s.length / 2, s.length / 2 + 1);
}
	return result
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"


//                          task-3

function findUniq (arr) {
	let result = arr.sort()
	result = (arr[0] === arr[1]) ? arr[arr.length - 1] : arr[0]
	return result
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));


// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


//                              task-4

function findOdd (A) {
	let count = 0
	for (let i=0; i<A.length; i++) {
		for(let j=0; j<A.length; j++) {
			if(A[i] === A[j]) {
				count++
			}
		}
		if(count % 2 != 0) {
			return A[i]
		}
	}
}

console.log(findOdd([1, 1, 2]));
console.log(findOdd([7]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// Given an array of integers, find the one that appears an odd number of times.
// 
// There will always be only one integer that appears an odd number of times.
// 
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


//                               task-5

function DNAStrand (dna) {
	return dna.replace(/A|T|C|G/g, x => {
		return (x === 'A') ? 'T' : (x === 'T') ? 'A' (x=== 'C') ? 'G' : 'C'
	})
}


console.log(DNAStrand('ATTGC'));

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"