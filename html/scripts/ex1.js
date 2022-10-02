//objective:Review of previous class
//Task:As the newly recuited software Engineer at Nestle,write a programm that does the following:
//1) Fills a carton of Nestle milk with 10 tins of millk
//2) Label each tin of milk with a random name selected from the dataset of names.


//Note:Tins can have the asme name.
//the dataset of names is given below.
//Names = ["Alpha Milk", "baby Food", "Best Milk", "BMIC", "OMIM"](1hr)
    /*let carton = []
    let tinOfMilk = 10
    for (let tinOfMilk = 0; tinOfMilk <=10; tinOfMilk++) {
        carton.push[tinOfMilk]
        
    }
    console.log(tinOfMilk);

let labeleNames = ['Alpha Milk', 'Baby Food', 'BMIC', 'OMIM']
for (let tinOfMilk = 0; tinOfMilk < labeleNames.length; tinOfMilk++) {
    let label = {

    }
    
    
}*/

//CORRECTION

// EMPTY CARTON
let carton = [];
let names = ['Alpha Milk', 'Baby Food', 'BMIC', 'OMIM'];
for (let ele = 1; ele <= 10; ele++) {
    //RANDOMLY SELECT NAMES FROM DATASET
    let name = names[Math.floor(Math.random() * names.length)];
    //ASSIGN THE NAME AS LABEL FOR THE TIN OF MILK
    let tinOfMilk = {
        [name]: ele
    }
    if (ele % 2 ===0) {
        tinOfMilk['color'] = 'red';
        
    }else{
        tinOfMilk['color'] ='green';
       
    }
   
    //FILL THE CARTON WITH LABEL TIN OF MILK
    carton.push(tinOfMilk)
}

console.log('this is the carton', carton);

//LABEL ALL RED TINS THAT ARE EVEN
//let tinOfMilk = 10;
//let evenTinOfMilk = null;
//let redLabel = evenTinOfMilk ?? ('red')
//console.log(redLabel);

//LABELL ALL GREEN TINS THAT ARE ODD
//let oddTinOfMilk = undefined;
//let greenLabel = oddTinOfMilk ?? ('green')
//console.log(greenLabel);

//write a code which can give grades to students according to their scores
/*
- 80-100,A
- 70-79,B
- 60-69,C
- 50-59,D
- 0-47,F
*/

let scores = prompt("Enter number");
switch (true) {
    case (scores >= 80 && scores <= 100):
        console.log("A grade");
        break;
        case (scores >= 70 && scores <= 79):
            console.log("B grade");
            break;
            case (scores >= 60 && scores <= 69):
                console.log("D grade");
                break;
                case (scores >= 49):
                     console.log("F grade");
                    break;
                    default:
                        console.log("The student was absent")
        
}

//QUICK EXERCISE
//Reverse my Str using conditional or loops exclusively

//let Str = ["A", "B", "C", "D", "E"];
//for (let i =  Str.length -1; i >= 0; i--) {
   // console.log(Str[i]);
   //OR 
    
//}
//HOW TO REVERSE A STRING
/*let language = "JAVASCRIPT";
let lang = "";
for (let index = language.length - 1; index >=0; index--) {
    lang.push (language);
    
}
console.log("My language is", lang)
*/

let Str = ["A", "B", "C", "D", "E"];
let rStr = [];
for (let index =  Str.length - 1; index >= 0; index--) {
    rStr.push (Str[index]);
    
}
console.log("rStr", rStr);

//FUNCTION IN JS
function printName(name){
    console.log(arguments);
    console.log("My name is", name);
}
//FUNCTION INVOCATION
printName("person", "age", "men", "school")


let number = [1, 2, 3, 4, 5];
let rNumber = [];
for (let index = number.length; index>=0; index--) {
    rNumber.push (number[index]);
    
}
console.log("my revrse is",rNumber);

let age = prompt("Enter age");
switch(true){
    case age >= 18 || age > 18:
        console.log("You are older enough to drive");
        break;
    case age <= 18 || age < 18:
        console.log("You are not fit to drive");
        break;
    default:
        console.log("You are under age");
        
}


function calBMI(w,h) {
    let MBI = prompt("Enter MBI")
    switch (true) {
        case BMI < 18.5:
            console.log("Underweight");
            break;
            case BMI <= 18.5 && MBI <=24.9:
            console.log("Normal weight");
            break;
            case BMI <= 25 && MBI <= 29.9:
            console.log("Overweight");
            break;
            case BMI <= 30 && MBI >= 30:
            console.log("obese");
            break;
    
        default:
            console.log("Both men and women are adults" );
            break;
    }
    let formularForMBI = w / (h * h)
    return formularForMBI
    
}
calBMI(2,5)