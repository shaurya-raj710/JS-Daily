// take the input and print the table upto 10


let start = Number(prompt("Enter the number"))

for (let i = 1; i<=10; i++){
    let mul = start*i

    console.log(`${start} X ${i} = ${mul}`)
}