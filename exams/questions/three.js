// print the total price of the elements when an object contained in an array is passed

function totalPrice(products){

    let n = products.length
    let sum =0

    for (let i=0; i<n; i++){

        let prod =  products[i]
        let pricee = prod.price

        sum = sum + pricee


    }

    console.log(sum)
}



totalPrice([
  { title: "Pen", price: 10 },
  { title: "Book", price: 50 },
  { title: "Bag", price: 200 }
]);


