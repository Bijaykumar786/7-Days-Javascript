

// types of loop in js
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for of loop


let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

// for loop
for(let day of days) {
    console.log(day)
}


let names = ["bijay", "ram", "ajay"]

for (let name of names) {
    console.log("my name is " + name)
}



let myInformation = [
    {
        name : "Bijay",
        age : 22,
        
    },
    {
    name : "Ram",
    age : 23,       
    }
]

for (let info of myInformation) {
    console.log(info.name + " age is " +info.age)
}