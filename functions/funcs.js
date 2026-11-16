// we can declare functions by various methods, lets look at 4 first

// function declaration

// function expression (named)
// const sum = function add(){}

// function expression (anonymous)
//  const sum = add(){}

//function expression (arrow function)
//   const sum = ()=>{}


//-------------------------------------------------------

// important and new ----->

// I.I.F.E. (Immediately Invoked Function Expression)

(function add(a,b){
    console.log(a+b)
})(20,70)

// we cannot call this function again (mostly for node js)