let sent = document.getElementById("counter")




let increased = document.getElementById("increase")
let decreased = document.getElementById("decrease")
let resett = document.getElementById("reset")

increased.addEventListener("click", increase)

decreased.addEventListener("click", decrease)

resett.addEventListener("click", resettt)





let count = 0;

function updateDisplay(){
    sent.textContent = count
}

function increase(){
    count++
    updateDisplay()
}

function decrease(){

    if (count>0){
        count = count -1
    }
    updateDisplay()
}

function resettt (){
    count=0
    updateDisplay()
}