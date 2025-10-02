

let slicedNumbers = [1,2,3,4,5,6,7,8,9]




let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
let slicedDays = days.slice(1,6)
console.log(slicedDays)






// let evenNums = [2,4,6,8,10]
// let sliceEvenNums = evenNums.slice(3,5)
// console.log(sliceEvenNums)



// let data = [1,2,3,4,5,6]
// data.splice(1,1,"hello" ,"world")  // splice le array ma kunai ni position ma element add garna milxa ani kunai ni position ko element remove garna milxa
// // first parameter = kun position ma add garne
// // second parameter = kati ota element remove garne
// // third parameter = kun element add garne
// console.log(data)



let text = "i,am,from,nepal"
let splitedText = text.split(",")
console.log(splitedText)



let datas = [1,2,3,4,5 ,6]
datas.splice(1,3, "hello", "world", "bye",)
console.log(datas)


let characters = ['m', 'a', 'n', 'i', 's', 'h']
characters.splice(0, 6, 13, 1, 14, 9, 19, 8)
console.log(characters)