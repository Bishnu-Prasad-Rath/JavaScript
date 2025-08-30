// If

// const usUserloggedIn = true;
// const temperature = 45;

// if (2 === "2") {
//     // console.log("Executed");
//     console.log("less than 50");
// }else{
//       console.log("Temperature is more than 50");
// }
// console.log("no more in a block scope");


//Types of comparision operator
// 1. Strict Equality (===)
// 2. Loose Equality (==)
// 3. Strict Inequality (!==)
// 4. Loose Inequality (!=)
// 5. Greater Than (>)
// 6. Less Than (<)
// 7. Greater Than or Equal To (>=)
// 8. Less Than or Equal To (<=)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

//Short hand notation
// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");  //This is not a good practice

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750) {                //-->This is a nested If
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("greater than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggenInFromemail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");   //In this case both conditions should be true other wise it will give false
}
if (loggedInFromGoogle || loggenInFromemail) {
    console.log("User is logged in");               //This is a or condition,user can logged in through either google or email
}