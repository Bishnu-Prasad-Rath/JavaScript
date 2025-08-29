let a = 100


//{} -->This is known as scope   //{}-->This is known as block scope and the outside of it is known as global scope

if (true) {
    let a = 100;
    const b = 200;
    var c = 300;   //-->in case of var the calue of "c" will be printed  even if the log is outside of the if loop.
    // console.log(a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Bishnu";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);           //Child function can access parent function but not vice versa
   two()
}
one()

if (true) {
    const username = "Bishnu";
    if (username === "Bishnu") {
       const website = " youtube";
       console.log(username + website);
    }
    // console.log(website);  ---> This will throw an error because website is not defined in this scope
}
// console.log(username);  ---> This will throw an error because username is not defined in this scope

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addOne(5);
function addOne(num){      //--->This is knows as Named function declaration.In this case you can run the code first because you declared the function
   return num + 1;
}



addTwo(5)
const addTwo = function(num){      //--->This is knows as Anonymous function expression.In this case you can't run
   return num + 2;                      //the code first because you declared the function but you stored it in a variable
}

