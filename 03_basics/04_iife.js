// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai(); // Normal function call

(function chai(){
    console.log(`DB CONNECTED`);  //This is a named IIFE
})(); // IIFE -->When you use IIFE method,you have to end it with ; for further you can use it in other function otherwise it will throw an error
(() =>{
    console.log(`DB CONNECTED 2`);
})();
((name) =>{
    console.log(`DB CONNECTED 2 ${name}`);   //This is a simple IIFE
})('Bishnu');