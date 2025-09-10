//Object literal
// const user = {
//     username : "Bishnu",
//     loginCount : 8,
//     signedIn : true,
//     getUserDetail: function(){
//         console.log("Got user details from database");
//         console.log(`Username:${this.username}`);
        
//     }
// }
// console.log(user.username);

// const promiseOne = new Promise()
// const date = new Date()   //new is the construction function

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Bishnu" , 12, true)
const userTwo = new User("chai" , 35 , false)
console.log(userOne);

//When we use the new keyword it first creates an empty object which is known as Instance
//A constructor function will be called for new keyword
//After that when we use this keyword it injects or verifies the specirfic objects so it can refer or connect to that particular object.
//.constructor is a property which refers to the particular object
//read the instaceof operator
//Prototype always give the access to use the keyword new
//The all function,prototype etc. are basically Objects.
