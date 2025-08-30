//For

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Found 5");
//     }
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);

   for (let j = 0; j <= 10; j++) {
    //    console.log(`  Inner loop: ${j}`);
        //   console.log(i + '*' + j + '=' + (i*j));         
}   
}

// let myArray = ["flash","batman","superman"];
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break //continue                           //in case of continue it will detect 5 but not break ignore the value and after that it will continue
    }
    console.log(`Value of i is ${i}`);
}