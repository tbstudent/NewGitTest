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

var number=14;
guess= Number(prompt("Can You guess the number Im thinking about"));
while(guess!==14){
	if (guess<14){
		guess= Number(prompt("Too low try again"));
	}
	else if(guess>14){
		guess= Number(prompt("Too high try again"));
	}
	
	

}

		alert("Awesome you got it right!");