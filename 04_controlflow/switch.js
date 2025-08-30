// switch (key) {    -->This is the basics syntax of a switch case
//     case value:  
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {                                 //In this case break is the most important think because if break is not applied then it will also execute the rest of the code except the default case
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default");
        break;
}