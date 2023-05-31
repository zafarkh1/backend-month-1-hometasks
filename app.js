//                            task-1

// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// function compact (arg) {
// 	let falsyVal = [false, null, undefined, 0, '', NaN]
// 	let smth = arg.filter((el) => el)
// 	return smth
// }

// console.log(compact([1,0,false,null,undefined,"banana"]), [1,'banana']);

//                         task-2

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// function toArray (arg) {
// 	return Object.entries(arg)
// }

// console.log(toArray({ a: 1, b: 2 }));

//                          task-3
// Create a function that concatenates n input arrays, where n is variable.


// function concat(...arg) {
// 	let arr1 = [...arg]
// 	let arr = []
// 	for (let i=0;i<arr1.length; i++) {
// 		arr.push(...arr1[i]);
// 	}
//   return arr;
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

//                           task-4
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.


// add_ly = add_suffix("ly");
// add_less = add_suffix("less");
// add_ing = add_suffix("ing");

// function add_suffix(suffix) {
//   return word => word + suffix;
// }

// console.log(add_less("total"));


//                            task-5
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.



// function triangle(arg) {
// 	return arg * (arg+1) / 2
// }

// console.log(triangle(6));


//                        task-6
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]


function arrayOfMultiples (arg1, arg2) {
	let result = []
	result = arg1 * 2
	return result
}
console.log(arrayOfMultiples(17, 6));