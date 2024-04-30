
var index = 0;

function changeColors(){
    var colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    document.getElementsByTagName('body')[0].style.background = colors[index++];

    if(index > colors.length - 1){
        index = 0
    }
}

var index2 = 0;

function changeButton(){
    var btn_colors = ['purple', 'green', 'yellow', 'orange', 'blue', 'red'];

    document.getElementsByTagName('button')[0].style.backgroundColor = btn_colors[index2++];

    if(index2 > btn_colors.length - 1){
        index2 = 0
    }
}

var index3 = 0;

function changeTitle(){
    var h1_colors = ['yellow','purple', 'blue', 'green','red','orange'];

    document.getElementsByTagName('h1')[0].style.color = h1_colors[index3++];

    if(index3 > h1_colors.length - 1){
        index3 = 0
    }
}