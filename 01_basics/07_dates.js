// Dates
 let myDate = new Date();
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toDateString());
 console.log(myDate.toJSON());
 console.log(typeof myDate);

//  let myCreatedDate = new Date(2025, 2, 5);
//  let myCreatedDate = new Date(2025, 2, 5, 5, 5);
 let myCreatedDate = new Date("01-14-2023");
    // console.log(myCreatedDate.toDateString());

    let myTimeStamp = Date.now();
    // console.log(myTimeStamp);
    // console.log(Math.floor(myTimeStamp/1000)); //for mili-seconds to seconds
    // console.log(myCreatedDate.getTime());
    
    let newDate = new Date();
    console.log(newDate);
    console.log(newDate.getMonth());
    console.log(newDate.toLocaleString('default',
        { weekday: "long" }
    ));