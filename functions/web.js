// taking input  via function and printing


function check(){

    const str = prompt("Enter the number")
    const num = Number(str)
    if(Number.isNaN(num)){
        console.log("Invalid num")
    }
    else{
        console.log("Your numebr is:", num)
    }
}

check()

