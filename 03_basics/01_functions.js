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
  
function calculateCartPrice(val1,val2,...num3){
 return  val1, val2 , num3;
}

console.log(calculateCartPrice(2, 3 , 4, 5, 6));   //... --->This is known as rest operator or spread operator depend upon the case we will use.

const user = {
    name: "Bishnu",
    price: 199
};

function handleObject(anyobject){
  console.log(`Username is : ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({name: "Sam", price: 299});   //This is known as passing object directly in a function

const myNewArray = [1, 2, 3, 4, 5];

function handleArray(getarray){
return console.log(getarray[1]);

}
// handleArray(myNewArray);
handleArray([10, 20, 30, 40, 50]);   //This is known as passing array directly in a function