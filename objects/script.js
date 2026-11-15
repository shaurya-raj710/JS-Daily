// in this one , we are going to learn about objects..
// key value pair

let student1= {
    name: "Rahul",
    batch : "Bengio",
    roll: "2616400718",
    1: "trial"

}

//now reading, which has 2 methods

console.log(student1.name)
console.log(student1["name"])
console.log(student1["1"])

// inserting a new key, this also has 2 methods 
// one is hardcode one , in which key and values are fixed.


let laptop = {
    processor : "intel",
    brand: "lenovo",
    color:"silver-black"
}

// hardcode way

laptop.battery = "65 watt"
console.log(laptop)

// dynamic way

let key = prompt("Enter the key")
let value = prompt("enter the value")

laptop[key] = value 

console.log(laptop)

//updating --> it also has 2 methods

laptop["brand"] ="asus"

let val1 = prompt("enter the key you want to change")
let newVal = prompt("Enter teh new value")

laptop[val1] = newVal


console.log(laptop)

// acessing using the notification 

let access = prompt("What do you want to know about my laptop?")

console.log(laptop[access])