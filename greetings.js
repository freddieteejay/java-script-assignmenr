const prompt = require("prompt-sync")();
let time = prompt("What is the time in your area?  ");
if (time < 12){
console.log("Good morning");
}else if (time < 16){
	console.log("goood afternoon");
}else{
	console.log("good evening");
}