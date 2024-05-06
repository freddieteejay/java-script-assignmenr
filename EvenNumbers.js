const prompt = require("prompt-sync")({siginit:true})
	
const num = prompt("Enter number : ");
	
	for(let i = 0; i < num; i = i+2){
	console.log(i);
}
