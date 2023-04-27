//operations...
let price = 20.99;

typeof price;//typeof returns the type of variables..

price = price * 3;//it is how we can multiply a number..

price += 4;//addition

price %= 5;//modulardivision just to get the remainder..

price++;//increment operator increases the value by 1..

price--;//decrement operator decreases the value by 1..

price/=3;//division operator 

//operation precedence..
price = 3 + 3 * 2 % 2;//operation will be according to BODMAS..
//use brackets to make code more understandable..

//number precision
let sum1=1.1 + 1.3;//outputs 2.4000000000000000004 which is not right..
// similer problems 20 - -2, leads to ambigueous problem.
let amount = 20 - (-2);//outputs 22..

//strings in javascript..
let message = 'hello world';//can be declared using single and double codes('',"")..

//incase we have to use the codes in side the string then we have to use escape character(\)..

let name = " Rajesh \"khajuria\" ";//can also use like \n,\t,\b,\'...

/*backtick 
 removes white spaces and any variable can be concated with it ..*/
 let last='khajuria';
 let Name =`Rajesh 
 
 ${last}`;//whitespaces but still works..

 //manipulation of strings..
 let ename = 'rajesh';
   ename+='khajuria';//concating a new string with it..

  ename=ename.toUpperCase();//gives output in uppercase and similerly .tolowercase()..
  //creating substrings..
  ename1=ename.substring(3,5);//creates a new substring..prints ES..

//.lenght property returns length of string..
let len=ename.length;//displays 14..

//typeof property..returns the type of variable.
let strng ="1234";//it will always be considered as a string.

//converting strings into numbers..
let amnt =123;
let typ = amnt.toString();//typeof typ is string..

amnt =Number.parseFloat("123.4");/*using Number object 
                                 and parseFloat function we can convert
                                 a string into number ..
                                 . if use  first letter other than digits it
                                 will display...*/

//boolen => true/false,yes/no,0/1....
let saved = false;// typeof returns boolean..

//operation..
saved =!saved;// not operator(!)converts true to false and vise-versa..

//null and undefined types..
let num ; //will not display anything but return type is undefined..
let num1 = null;
                        
//objects and symbols..
let person ={// it is how we declare function..
    firstname: 'rajesh',
    lastname:'khajuria'
};
//we can retrive properties of an object using dot operator(.)..
//example =. person.firstname..

// we can also use methods in objects..
showMessage( person.firstname);
