#include <iostream>
using namespace std;
/*Write a program that takes in 3 inputs and determines the maximum between them and checks to see if
the third one is between the interval of the maximum of minimum*/
main()
{
int m;
int y;
/*
1. Janurary	#These are the names of the months and ate un comments with an Si
2. Febuary lets just add this to make some 
3. March
4. April
5. May
6. June
7.July
8.August
9.September
10.October #this is a comment
11.November
12.December
*/
cout << "Select a month for the year you want to know the days of" <<endl;
cin>> m;
/*cout << "Enter an integer" <<endl;
cin>> c;
*/


	switch (m)

	{
    case 1:
	cout<< "There are 31 days in January " <<endl;
	break;
	case 2:
	cout<<"Enter a year youd like to find the amount of days in Febuary for."
	cin>>y;
	if (y%4)
		else if


	cout<<"There are 31 days in Febuary "<<endl;
    break;
    case 3:
	cout<< "There are 31 days in March "<< endl;
	break;
	case 4:
	cout<<"There are 30 days in April "<< endl;
	break;
	case 5:
	cout<<"There are 31 days in May "<<endl;
	break;
	case 6:
	cout<<"There are 30 days in June "<<endl;
	break;
	case 7:
	cout<<"There are 31 days in July "<<endl;
	break;
	case 8:
	cout<<"There are 31 days in August "<<endl;
	break;
	case 9:
	cout<<"There are 30 days in September "<<endl;
	break;
	case 10:
	cout<<"There are 31 days in October "<<endl;
	break;
	case 11:
	cout<<"There are 30 days in November "<<endl;
	break;
	case 12:
	cout<<"There are 31 days in December "<<endl;
	break;
	default:
	cout<<"you've selected Yourmom! I said choose a number between 1-6 !"<<endl;
}
}
