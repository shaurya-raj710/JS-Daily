

function isDist(price, isMember){
    let dist10 = price - price*0.1
    let dist20 = price - price*0.2

    if (isMember===true){

        return dist20

    }
    if (isMember===false){
        return dist10
    }
}

console.log(isDist(900, true))