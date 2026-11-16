let person1 ={
    name:"Ramesh",   //property
    age: 28,
    work:"Software",  //property
    child : false,
    income: function inr(){     // method
        console.log("20,000")

    },
    happy: "yes",
    country:"India"
}


console.log("Ramesh", person1)
// calling a function which is inside an object

person1.income() // note to access it we have to give its keys value not the name of the fuction

// an important thing is 'this' keyword
// if we use ()=>{} arrow function then the this keyword refers to the global variable
// but if we use the function(){} keyword then it refers to the parent

person1.city= function city(){
    console.log("City is Delhi,", this.country)
}
console.log(person1)
person1.city()

person1.info = function info(){
    console.log(`The name is ${this.name}, his age is ${this.age}, he lives in ${this.country} `)
}

person1.info()


//--------------------------------------------------------------------------------

// objects inside objects

let student ={
    name:"Rahul",
    marks: {
        maths: 98,
        python :100,
        fsd : 95
    },
    college: "Zenith"
}

console.log(student.marks.maths)

// loops in objects

for(let i in student){
    console.log(i)
}

// objects to arrays

const keys = Object.keys(student)
console.log(keys)
// to access values we use
const vals = Object.values(student)
console.log(vals)

// Object.entries , these give you key value pair