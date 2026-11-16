// we will be discussing about scopes...
// var , let , const are all functional scope... if declared inside a function then they cannot be 
// accessed outside the function.

// let and const are block scoped---> this  means that if they are defined inside this{}
// then they cannot be accessed outside of that

const temp = ()=>{
    var age1 =49
    let age2 = 59
    let age3 =56

    if(true){

        var agee = 45
        let agee2 =51
    }

    console.log(age1)
    console.log(agee)
    console.log(age2)
    console.log(age3)
}


temp()

// as you can see, all will not be accessed if we try to put and aceess them outside of teh function

