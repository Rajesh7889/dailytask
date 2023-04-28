//functions in javascript..
function userName(){   //declaring and defining a function..
  //  console.log("rajesh");
}
changePercentOff( 32 );

userName(); // calling a function..
let fn = function(){
     //  console.log("rajesh");
}
fn();

//passing arguement to function...
let fxn = function(message){
   // console.log(message);
}
fxn("hello");

//function may return value...
let fun=function(value){
    let code = value * 4;
    return code;//returning a value...
}
//console.log(fun(4));//return 16..
 //showMessage(fun(4));

//function scope...local variable and methods have scope within the blocks of function...
let fsn = function(value){
    let code = value * 38;
    return code;
}
let cod = fsn(4);
console.log(code);// code not defined error..

