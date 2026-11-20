// creating object and converting to json and vice versa

let products = {
    name: "shirt",
    size : "M",
    price: "Rs. 2000",
    quality : "excellent",
    quantity : 20
}

let prodjson = JSON.stringify(products)

console.log(prodjson)

// from json to obj

let p = JSON.parse(prodjson)
console.log(p)