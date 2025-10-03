
//function basically two types 
// 1. Regular function
// 2. Arrow function

// function addTwoNumbers(a,b,c){
//     console.log (a+b+c)
// }

// addTwoNumbers(10,20,30)


// 2. Arrow function 

// let  addTwoNumbers = (a,b,c) => {
//     console.log (a+b+c)
// }

// addTwoNumbers(10,20,30)



// let myInformation = [
//     {
//         name : "Bijay",
//         age : 22,
        
//     },
//     {
//     name : "Ram",
//     age : 23,       
//     }
// ]

let myInformation = (name,age) => {
    console.log("my name is "+ name +" and age is " + age)
}

myInformation("bijay", 20)
myInformation("ram", 22)

// -------------------------------------------
let days = ["sun", "mon", "tues", "wed"]

 function week (haha) {
    for (let daya of haha){
        console.log("Today is " + daya)
    }
 }

 week(days)