const myObject = {
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby',
    go : 'Golang'
}

//for in  -->It is applicable for object normally

for (const key in myObject) {
    // console.log(key, "=>", myObject[key]);  
}

const programming = ["js", "py", "rb", "go"]

for (const key in programming) {
    // console.log(key, "=>", programming[key]);
}

// const map = new Map();
// map.set('IN',"India")
// map.set('USA',"United States")
// map.set('UK',"United Kingdom")     
// map.set('AU',"Australia")

for (const key in map) {
//   console.log(`The value of key is: ${key} and the value is : ${map[key]}`);  -->We can't use map in forin loop directly.
}

