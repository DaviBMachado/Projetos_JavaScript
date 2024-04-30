const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyAnwser1 = Math.floor(Math.random() * 13);
    var dummyAnwser2 = Math.floor(Math.random() * 13);
    var allAnwsers = [];
    var switchAnwser = [];

    answer = num1 - num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnwsers = [answer, dummyAnwser1, dummyAnwser2];

    for(i = allAnwsers.length;i--;){
        switchAnwser.push(allAnwsers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnwser[0];
    option2.innerHTML = switchAnwser[1];
    option3.innerHTML = switchAnwser[2];
}

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        generate_equation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
        generate_equation();
    } else {
        audio.play();
    }
});

generate_equation();