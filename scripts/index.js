// JS OPERATOR
// Arithmetic => +, -, *, /, % (BODMAS)
// Logical Operators => ||, $$, !, ?, ??
// Tenary Operator => a ? b : c
//Conditionals (if, tenary ) (a ? b :c)
//let condition = false
//if (condition) {
// does something
//}
// else is optional
//else {
    // does this thing
//}
// always executes

//lOOPS
/*let counter = 0
while (counter <10) {
    console.log("counter is",counter);
    counter++;
}*/
//STACKS AND QUEUES

let drum = [] //STACKS
let items = 20;
for(let item = 1;item <=20;item++){ 
    drum.push(item);
    }
    console.log("final drum is",drum);


    // let label = ["A", "B", 'C', "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"]
    // for (let items  = 1; items <= label.length;items++){
    //     let val = {
    //         [label[items - 1]]: items
    //        // key:value pairs
    //     }
    //     drum.push(val)
    // }
  

//for(let counter = 0;counter <=10;counter++){ 
    //console.log("counter in for is", counter);
/*
// For Loop
for(initialization;condition;increment/decrement){}
// for(; true;){}
initialization
for(;condition;){
    increment/decrement
}
*/
//FUNCTION IN JS
function printName(name){
    console.log(arguments);
    console.log("My name is", name);
}
//FUNCTION INVOCATION
printName("person")

//FUNCTION EXPRESSION (first class functions)
const printName2 = function () {

}
printName2()
let countDown = 60
let countDownClock = []
for (let index = 0; countDown; index++) {
    const element = array[index];
    
}