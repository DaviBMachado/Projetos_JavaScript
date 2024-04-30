var timeBegan = null; //o relógio começou?
var timeStopped = null; //há que tempo o timer parou?
var stoppedDuration = 0; //quanto tempo o cronômetro ficou parado?  
var startInterval = null; //necessário para para o startInterval()metodo
var flag = false; //para controlar o start/stop do timer

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function(){
    if(!flag){
        starTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
})


timerContainer.addEventListener("dblclick", function(){
    resetTimer();
})
function starTimer(){
    if(timeBegan === null)
        timeBegan = new Date();

    if(timeStopped !== null)
        stoppedDuration += (new Date() - timeStopped);

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer(){
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning(){
    var currentTime = new Date();
    var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    var hours = timeElapsed.getUTCHours();
    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    document.getElementById("timer-display").innerHTML =
    (hours = hours <10 ? '0' + hours:hours) + " : "+ 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + " : "+ 
    (seconds = seconds < 10 ? '0' + seconds:seconds) + " : " +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

function resetTimer(){
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.getElementById("tiemr-display").innerHTML = "00 : 00 : 00";
    flag = false;
}