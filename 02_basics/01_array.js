//Array
const myArr  = [0 ,1, 2, 3, 4, 5, true, "Bishnu"];
// console.log(myArr[6]);
const myHeros = ["Spider-Man", "Iron Man", "Captain America"];
// console.log(myHeros[1]);
const myArr2 = new Array(1,2,3,4);
// console.log(myArr2);


//Array methods

// myArr.push(6);
// console.log(myArr);
// myArr.pop();

// myArr.unshift(6); // Adds an element at the beginning


// myArr.shift(); // Removes the first element
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(newArr);
// console.log( typeof newArr);

//Slice,Splice

console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)

console.log(myArr);


console.log(myn1);

console.log("A" , myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);

console.log(myArr);
