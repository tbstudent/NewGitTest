//The next few lines of code will print the numbers -10-20!!
// Using a while loop

// var counter=-10;

// while (counter<20){
// 	console.log(counter);
// 	counter+=1;
// }
//This next while loop will print out all even numbers between 30-58

// var counter=30;
// while(counter<58){
// 	if(counter%2 === 0){
// 	console.log(counter);	
// 	}
// 	counter+=2;
// }

// This next while loop will print all odd numbers between 300-333!
// var counter=30;
// while(counter<58){
// 	if(counter%2 !== 0){
// 	console.log(counter);	
// 	}
// 	counter+=1;
// }

// This next while loop will demostrate the use of while loops to get the user to pin point the number the website is thinking of.

// var number=14;
// guess= Number(prompt("Can You guess the number Im thinking about"));
// while(guess!==14){
// 	if (guess<14){
// 		guess= Number(prompt("Toooo low try again"));
// 	}
// 	else if(guess>14){
// 		guess= Number(prompt("Too high try again"));
// 	}
	
	

// }

// 		alert("Awesome you got it right!");

// this next thing will annoy you till you "By repeating are we there yet?" type the words yes or yeah than it will
// alert Yayy we made it! V1
// var answer = prompt("Are we there yet");

// while (answer !== "yes" && answer !== "yeah"){
// 	var answer = prompt("Are we there yet");
// }
// alert("YaAAYY we made it");

//This version of this annoy-o-matic asks the same question over and over again until the answer you input 
// At least has a "yeah" or "yes" in it.

// var answer = prompt("Are we there yet");

// while (answer.indexOf("yes")===-1 && answer.indexOf("yeah")===-1){
// 	var answer = prompt("Are we there yet");
// }
// alert("YaAAYY we made it");

// This next is an example of a forloop printing all numbers between -10-19

// for(var num=-10; num<20; num++){
// 	console.log(num);
// }
//This next is an example of a forloop printing all even numbers between 10-40

for(var num=10; num<=40 ; num+=1){
	if(num % 2  === 0){
	console.log(num);
}

}