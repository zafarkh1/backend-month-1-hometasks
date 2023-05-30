let btn = document.getElementById("btn")
let textarea = document.getElementById("textarea");
let list = document.getElementById('list')

btn.onclick = () => {
	let func = new Function('n', textarea.value);
	list.innerHTML = ""
	let li = document.createElement("li")
	for(let i of answers) {
		li.textContent = func(i[0]) == i[1];
		list.append(li)
	}
}

let answers = [
	[3, 180],
	[4, 360],
	[5, 540],
	[6, 720],
	[7, 900],
	[8, 1080]
]