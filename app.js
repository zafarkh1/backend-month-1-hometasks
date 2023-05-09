//                       task-1
// function largestEven(arg) {
//   let max = arg[arg.length - 1];
//   arg[0] = arg[0] < max && max % 2 == 0 ? max : arg[0];
//   arg.pop();
//   if (arg.length > 1) return largestEven(arg);
//   return arg[0] % 2 == 0 ? arg[0] : -1;
// }

// console.log(largestEven([3, 7, 29, 1, 7, 9, 10, 13]));

//                        task-2
// function collatz(arg, count = 0) {
//   arg = arg % 2 ? arg * 3 + 1 : parseInt(arg / 2);
//   count++;
//   if (arg == 1) return count;
//   return collatz(arg, count);
// }

// console.log(collatz(3));

//                       task-3
// function integerToString (num, base, res = '') {
// 	res = num % base
// 	num = parseInt(num % base)
// 	if(num != 0) return integerToString (num, base, res)
// 	return res
// }
// console.log(integerToString(10, 2))