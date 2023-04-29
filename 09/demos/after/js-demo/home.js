//Arrays in javascript..(can store multiple values/items within it..)
//creating an array..
let values = [];
//initialising an array..
values=[1,4,5,4];
showMessage(values);
//another way to declare and initialise..
let arr = Array.of(1,3,5,3,4); 
showMessage(arr);
showMessage(typeof arr);//typeof array always returns object..
// arrays are not builtin data types..
showMessage(Array.isArray(values));//returns true..
//Accessing Array items...
showMessage(values[0]);//index outside the range will display undefined..
for(let i = 0;i < values.length;i++){
  values[i]=i;
  console.log(values[i]);
}
//manipulating an array at beganing and its end...
//push()..adds an element in array at the end..
values.push(6,7);
console.log(values);
//pop()..deletes an element form the end of an array..
values.pop();
console.log(values);
//shift()..shifts entire array to the left and takes the first value of array..
let c = values.shift();
showMessage(c);
//unshift()..shifts whole array to the right and adds the elements in the begining of an array..
values.unshift(7,6,5);
console.log(values);
// manipulating an array at anywhere...
// slice()..creates the new array from pre-existing array..
let newvalues = values.slice(0,6);
console.log(newvalues);
//splice().. it delete as well adds an element in the actuall array..
values.splice(2,2,"hello");
console.log(values);

//Array searching and looping..
// indexof()..returns the index number of the specific element..
console.log(values);
showMessage(values.indexOf(7));//returns 0..for an element which doesn't exists in array returns -1..

//filter()..returns a new array by filtering according to the condition specified ..

let updatedValues = values.filter((item) =>//instead of using arrow operator , we can also use function()keywoard..
 { return item>1;})//returns either true or false..if returns true filter save the element in new array otherwise not..
showMessage(updatedValues);

//find()..similar to the filter function it also takes a function as ana  argument and returns true or false and accordingly returns a value..
let found = values.find((item) => 
{return item >5 ;})  
showMessage(found);

//foreach()..goes through each element of an array ..
values.forEach(function(item){
  console.log(item);
})

//array in the DOM..
// creates an array of containers..
const containers = document.getElementsByClassName('container');
containers[0].classList.add('d-none');
console.log(containers);