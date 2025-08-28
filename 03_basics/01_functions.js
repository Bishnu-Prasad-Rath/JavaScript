// Function: A block of code that performs a specific task

function hello(){
console.log("B");
console.log("i");
console.log("s");
console.log("h");
console.log("n");
console.log("u");
}

// hello();   //This is known as function execution

// function addTwoNumbers(num1, num2){
//          console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
        //  let result = num1 + num2;
        //  return result;
        return num1 + num2;
         console.log("Bishnu");   //After execution of return in a function, no code will be executed
}
const result = addTwoNumbers(5, 10);

console.log("result: ", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a UserName");   
    }
        return `${username} just logged in!`;
}

console.log(loginUserMessage("Bishnu"));   //when you pass nothing in a function like this like nothing "" this will give you undefined
  