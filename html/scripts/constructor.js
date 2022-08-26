class Alliens{
    prop ="This is the prop within Alliens"
}
let peopple = new Alliens();
console.log(peopple.prop);


/*CONSTRUCTOR FUNCTION
function Aliens2(prop) {
    this.prop = prop;//binding
    //implicit return "this"
}
let peopple2 = new Aliens2("This is a man created from Aliens");
console.log(peopple2.prop);
console.log(peopple2);


class Counter{
myCounter = 60;
};
let myNewCounter = new Counter();
console.log(myNewCounter.myCounter);
*/
class Alliens{
    constructor(prop){  
    this.prop=prop;

}
count(){
    alert("My first count")
}
}
let newCount = new Alliens('prop');



