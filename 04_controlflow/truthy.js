const userEmail = "user@example.com";

if (userEmail) {                             //-->In this case the case will be true if user have an value otherwise it will print else case
    console.log("Got user Email");
}else{
    console.log("No user Email");
}

//Falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//true, 1, -1, BigInt 1n, "some string", {}, [],"0",'false',"",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty.");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty.");
}

// && -->This is the and operator
// || -->This is the or operator
// ?? -->This is the nullish coalescing operator -->themain keywords are null and undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;


//Ternary operator
// condition ? fTrue : fFalse

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");