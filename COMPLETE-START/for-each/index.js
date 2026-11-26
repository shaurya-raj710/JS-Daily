console.log("hello bhai")

// click the button and send an notification

const btn  = document.getElementById('notification')

btn.addEventListener("click", function(){
    console.log("clicked")
    alert("Thanks for clicking")
})

let heading = document.getElementById("heading")

heading.style.color="red"