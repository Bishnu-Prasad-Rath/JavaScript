//singleton

//Object literals
//Object.create

const mySym = Symbol("key1");

const Jsuser = {
  name:"Bishnu",
  "Full Name":"Bishnu Rath",
  age:20,
  location:"Koraput",
  email:"rbishnu604@gmail.com",
  [mySym]: "mykey1",
  isLoggedIn:false,
  lastLoginDays:["Monday","Saturday"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);   //If you are using square brackets, you must have to use douoble quotations.
console.log(Jsuser[mySym]);
console.log(typeof Jsuser[mySym]);
// Object.freeze(Jsuser); //This will make the object immutable, you can't change the properties of this object.
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Welcome to JS");
}  
Jsuser.greeting = function(){
    console.log(`Welcome to JS ,${this.name}`);
    
}
console.log(Jsuser.greeting());

