//flow control..it is basically how control flows in program...
/* flow of control in a program can be handled by using multiple conditional
   statements , loops, jump statements etc*/
    

// if() statements... basically works on the conditions if condition is true code will
// be exicuted otherwise not...
let message = "name";
let value=18;
if(value > 17){
    //control will enter in the block...

}//control will enter in the block only for truely values but not for falsey 

 //if() else statements..
  if(false){
   //showMessage("true"); run this code..
  } else  {
    //showMessage("false"); 
    //run it..
  }//for a true condition , if code block will be exicuted otherwise else block will be exicuted

  // comparing operators ===,==
   if(1 =='1' ){
    //showMessage("true");//this code will be exicuted bcz it doesn't checks the type ..
   } else {             //but if we use === , it will return false bczz it checks type also..strict operator..
   // showMessage("false");
  }

  //  the ternary operator..
 // (false)?showMessage("true"):showMessage("falsee");

 // Block scope using let..
   if(true){
    let mess = "I am inside the blog";
   }
  // showMessage(mess);//will not display mess bczz a it has scope only within the block it is declared..

  // to exicute a same code again and again we use loops..
  // for()loop..
  for(let i = 0 ; i< 3; i++){
  // showMessage("hello");
  }
  //while loop..while(condition){ ...code..}..
  let count=0;
  while(count<5){
   // console.log(count);
    count++;
  }
  //do..while()loop....
  count=0;
  do{
    console.log(count);
    count++;
  }while(count<5)
