// we are going to see , how to store data permanently
// please dont store sensitive information

// localStorage.setItem("name","unknown-boi")
// localStorage.setItem("class", "zentih")

//note : -------------> even if i comment it , it stills , shoes up , because stored in local


console.log(localStorage.getItem("name"))


// passing an object

let products = {
    name: " tshirt",
    cloth: "cotton",
    price:"Rs. 2000",
    quality:"excellent"
    
}

// localStorage.setItem("products",JSON.stringify(products))

let items = localStorage.getItem("products")

localStorage.clear()
console.log(items)

localStorage.removeItem("name")
localStorage.clear()