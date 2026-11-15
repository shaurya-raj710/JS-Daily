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