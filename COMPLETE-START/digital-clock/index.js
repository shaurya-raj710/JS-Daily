let hourele = document.getElementById("hour")
let minutesele = document.getElementById("minutes")
let secondele = document.getElementById("seconds")
let aMpM = document.getElementById("ampm")
function updateTime(){

    let hour = new Date().getHours()
    let mins = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let ampm = "AM"
    

    if (hour>12){
        ampm="PM"
        hour = hour - 12
        
    }

    hourele.innerHTML=hour
    minutesele.innerHTML=mins
    secondele.innerHTML=seconds
    aMpM.innerText=ampm
    // setTimeout(()=>{
    //     updateTime()
    // },1000)



}

updateTime()
setInterval(updateTime, 1000)


// both methods work