//for of   -->This is not applicable for objects directly 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
//   console.log(num);
}

const greetings = "Hello world"
for (const char of greetings) {
//   console.log(char);
}

//Maps   //Maps is used for unique values

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States")
map.set('UK',"United Kingdom")     
map.set('AU',"Australia")

console.log(map);

for (const [element,value] of map) {
    // console.log(element,"=>",value);                   //   If you want ot get the result without in array form then you should write it like this 
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
}

// for (const [element,value] of myObject) {
//     console.log(element,"=>",value);
// }