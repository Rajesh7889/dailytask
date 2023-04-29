
//objects and DOM in javascript..use to manipulate html pages..
//object contains properties and methods..
//object properties
let person = {};//empty object..
let mySymbol = Symbol();//can be used to hid information..
let person1={   //creation of an object with properties..
    name:"rajesh",
    age:23,
    location:"ramnagar",
    [mySymbol]:"worrior",
    showinfo: function(){   //an object can also have methods..
       // showMessage(this.name);
    },
    showinfo1:function(realage){  //methods with paramentors..
      // showMessage(this.name +" is "+realage);
    }
};
person1['age']=24;//changing the values of properties of an object..
//showMessage(person1.age);//using dot operator, we can access the property value..
person1.showinfo();//calling a method..
person1.showinfo1(34);//calling method with parameter..
//showMessage(typeof person1.showinfo1);//will displays function..

//passing an object to a function..
let message = "hello";
function changeMessage(message){ //it will not change the value of golble variable..
   message = 'hi';
}
changeMessage(message);
showMessage(message);
 function incrementage(person1){
    person1.age++;            //it will change the actual value of the object...
 }
 showMessage(person1.age);
 //built in objects in javascript..
 let date = new Date();//using Date object ..
showMessage(date.toDateString());//will show the date string formet..
showMessage(Math.abs(-33));// using Math object..
let str = 'hello';
showMessage(str.charAt(3));//using string methods..



//Document object Method (DOM)...
let styll =document.getElementById('message');
styll.style.color='red';//styling elements using dom...
const button = document.getElementById('see-review');
//eventlistener and button...
button.addEventListener('click', function() {
  
const review = document.getElementById('review');//targeting the id..

    if (review.classList.contains('d-none')) {//if it contains d-none..
        review.classList.remove('d-none');    //remove d-none class..
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');      // if it doesn't contain d-none
        button.textContent = 'SEE REVIEW';
    }
    ;

})
