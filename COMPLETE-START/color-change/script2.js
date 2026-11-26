// in this we are seeing another method, short method to do this

let back = document.querySelector("body")

let backcolors = document.querySelectorAll(".color-btn")

let resett = document.getElementById("reset-btn")

backcolors.forEach(function(button){
    button.addEventListener("click", function(){
        back.style.backgroundColor= button.id
    })
})