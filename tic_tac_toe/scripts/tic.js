window.addEventListener("load",bindEvents);

var gameEnd = false;

var buttons ;

var isXorZero = false;

function showTic(){
    if(!gameEnd){
        if(this.innerText.trim().length==0){
            this.innerText =  isXorZero?"X":"0";
            isGameOver();
            isXorZero = !isXorZero;
        }
    }
}

function bindEvents(){
    buttons = document.querySelectorAll("button");
    for(let button of buttons){
        button.addEventListener("click",showTic);
    }
}
function isRowSame(first, second, third){
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])){
        return buttons[first].innerText == buttons[second].innerText && buttons[first].innerText == buttons[third].innerText;  
    }
    return false;
}

function isNotBlank(button){
    return button.innerText.trim().length==0?false:true;
}

function isGameOver(){
    var gameOver ="";
    if(isRowSame(0,1,2)){
        gameOver = "Game Over";
        gameEnd = true;
    }
    else if(isRowSame(3,4,5)){
        gameOver = "Game Over";
        gameEnd = true;
    }
    document.querySelector("#result").innerText = gameOver;
}
