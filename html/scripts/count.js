let counter = 60
let myBody = document.getElementById("counts")
/*setTimeout(() => {
    
}, interval);(function () {
    counter=-5
    switch (true) {
        case (counter %5 ==0 ):
            myBody.style.backgroundColor= "green"
            
            break;
        case (counter < 10 ):
        myBody.style.backgroundColor="red"
    break;
    case (counter % 2 ==0 ):
        myBody.style.backgroundColor="yellow"
    }

    console.log(counter);
},1000)
*/

function myCount() {
    switch (true) {
        case (counter % 2 == 0):
            myBody.backgroundColor.style = "green"
            
            break;
            case(counter % 5 == 0):
            myBody.backgroundColor. style = "yellow"
            break;
            setInterval(myCount, 1000)

    
    }
}





