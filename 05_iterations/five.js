const coding = ["js", "py", "rb", "go"]

// coding.forEach(function (item) {
//   console.log(`The values are ${item}`);
// })

// coding.forEach( (item) => {
//   console.log(`The values are ${item}`);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });

const myCoding = [
    {
      language: "js"
    },
    {
      language: "py"
    },
    {
      language: "rb" 
    },
    {
      language: "go"
    }
]
myCoding.forEach((item)=>{
    console.log(`The values are ${item.language}`);
})