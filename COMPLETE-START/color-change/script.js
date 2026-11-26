let back = document.querySelector("body")

back.style.backgroundColor ="black"

let redd = document.getElementById("red")

redd.addEventListener("click", function(){
    back.style.backgroundColor = "red"
})

let bluee = document.getElementById("blue")

bluee.addEventListener("click", function(){
    back.style.backgroundColor ="blue"
})

let greenn = document.getElementById("green")

greenn.addEventListener("click", function(){
    back.style.backgroundColor ="green"
})

let yellow = document.getElementById("yellow")
yellow.addEventListener("click",function(){
    back.style.backgroundColor ="yellow"
} )

let purple = document.getElementById("purple")

purple.addEventListener("click", function(){
    back.style.backgroundColor="purple"
})


let reset = document.getElementById("reset-btn")
reset.addEventListener("click", function(){
    back.style.backgroundColor="black"
})
