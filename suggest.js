// var num=-10;
// while(num<=20){
// 	console.log(num+1);
// 	num++;
// }


 
// 	if (guess===9)
// 	alert("You got It right!!");
// else if (guess<9)
// 	alert("Your guess is too low try again");
// else if (guess>9)
// 	alert("Your guess is too low try again");
// var num=10;
// while(num<=40){
// 	if(num%2 === 0);
// 	console.log( num );
// 	num+=2

// }
// var num=300;
// while(num<=333){
// 	if(num%2 !==0){
		
// 		console.log( num );}
	
// 	num+=1;
	
	

// }

// var num=5
// while(num<=50){
// 	if(num%3 ===0 && num%5 ===0){
// 	console.log(num);

// 	}
// num+=1;


// }

// This below will keep asking the same question until the answer it yes and at that point print out 
// We made it!!
// var answer= prompt("are we there yet?");

// while(answer !== "yes" && answer !=="yeah"){
// 	 answer = prompt("are we there yet?");
// }
//  alert("We made it!!");

 //Version two will basically take any answer with the the word yes as long as its in the sentence.
 var answer= prompt("are we there yet?");

while(answer.indexOf ("yes")===-1 ){
	 answer = prompt("are we there yet?");
}
 alert("We made it!!");
