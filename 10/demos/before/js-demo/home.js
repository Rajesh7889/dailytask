//Scope and hoisting..(the accessing  area of a variable/function)
//scope->Global and function..
//Global object..all .js files can use these variables..used just to avoid the variable pollution..
'use strict';
const app={
     cost:3434,
     number: 5,
     id: 43343, // there can functions also..

}
//Global scope..
let id = 34334;
function showProduct(){//id is not defined in this function still displaying 34334 on it's call..
    console.log(app.id);
}
 showProduct(); //function call..

 //function scope..we can access it only inside a function..
 function details(){
    let myid=44;
    console.log( 'outer function id  '+ myid );
    function fix(){
        let myid =353;//will used within this function.. will override global values declared with same name..
        console.log('inner function id '+ myid);
    }
    fix();//can't be accessed outside of this function..
 }
 details();
//console.log(myid);//gives an error .. myid is not defined...

//var and Hoisting..
idd= 43434;
console.log(idd);//we can access variables declared with var keyword before it's declaration,but we must have to initialise it first.
var idd;         //in case of let and const .. it will returnn error..

hoisted();             //called before it's initialisation.. but does'nt returns error..
function hoisted(){    //it is so bczz javascript file exicuted in two passes ..in first pass it know about the function named hoisted and 
    console.log(idd);  //in second pass it exicutes the pass from top down..
}

//undeclared Variables and Strict Mode..
prdct =334343;       //it is being declared in window object..and can be accessed using window.prdct..
console.log(prdct);
  
// to avoid it we use 'use strict' string.. globally.. now if we don't declare the variable then it will show the error .

pct1 = 434343;
console.log(pct1);