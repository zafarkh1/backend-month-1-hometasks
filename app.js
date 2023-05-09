//                        task-1
// const word1 = "#123adfdgth6sdfs%$#(2345gdfngfFGJHGHG34dfsmklfm@#$%$#/]defg";
// const sortedWord = word1
//   .split("").sort((a, b) => {
// 		if(isNaN(a) && isNaN(b)) {
// 			console.log(a.localeCompare(b));
// 		}
// 	})

// console.log(sortedWord); // Output: adfdgthdfsdfsgdfngffFGJHGHGdfsmklfm1234562345

//                         task-2

// let word = "kiritilgan matnni hamma sozlarini bosh harflarga aylantiring";

// function capitalize(arg) {
// 	let words = arg.split(" ")
// 	for(let i = 0; i < words.length; i++) {
// 		let word = words[i]
// 		words[i] = word.charAt(0).toUpperCase() + word.slice(1);
// 	}
// 	return words.join(' ')
// }

// console.log(capitalize(word));

//                         task-3
// let numbers = 3621;
// let sum = 0
// for (let i = 0; i < numbers.toString().length; i++) {
// 	sum = sum + parseInt(numbers.toString()[i] ** [i+1]);
// }
// console.log(sum);

//                    task-4
// let text =
//   "Lorem, ipsum dolor piss off amet consectetur adipisicing elit. Laudantium quo quas corrupti, magni quia hell, cumque adipisci id harum esse sheet iure provident sunt, debitis voluptates aliquam? Provident, unde qui.";

// let splitted = text.split(" ");
// let swearWords = ["hell", "pissed", "sheet"];
// for (let i = 0; i < swearWords.length; i++) {
//   let pattern = new RegExp(swearWords[i], "gi");
//   console.log(pattern);
//   text = text.replace(pattern, "***");
// }