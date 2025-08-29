const user = {
    username : "Bishnu",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website.`);  //This will use to access the current context                                                     in  a particular scope for execution
        // console.log(this);  //-->this always refers to the context in a scope
    }
}
// user.welcomeMessage()
// user.username = "Ramesh"
// user.welcomeMessage()

// console.log(this);  //THis will give you current context as empty object

//In browser the global object is "window"

// function chai(){
//     console.log(this);    //We can't use "this" here as expected in normally
    
// }
// chai()  //This will give you the global object "window" in browser and "global" in nodejs

// const chai = function(){
//     let username = "Bishnu";
//     console.log(this.username);
// }
// chai()  
const chai = () =>{
    let username = "Bishnu";
    console.log(this.username);    //This is known as arrow function
}
// chai()  

// const addTwo = (a, b) => {         //IN this case you used the return keyword so this is known as explicit
                                      //return
//     return a + b;                 //-->This is a noremal arrow function  If you use {} then you have to 
// }                                      write return and if you use () then no need to write return
// const addTwo = (a, b) =>  a + b;    //This is known as Implicit Return

console.log(addTwo(5, 10));

const addTwo = (a, b) =>  ({username: "Bishnu"});  //To return an object you have to use parentheses and {} as well

// Example of using these concepts
//  const myArray = [2, 3 , 4 , 5 , 6];

//  myArray.forEach()