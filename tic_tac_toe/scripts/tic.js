window.addEventListener("load",bindEvents);

var buttons ;
var gameEnd = false;

var isXorZero  = false;

function showTic() {
    console.log("Show Tic Call");
    if(!gameEnd){
        if(this.innerText.trim().length==0){
    	    this.innerText = isXorZero?"X":"O";
    	    isXorZero = !isXorZero;
            isGamOver();
        }
    }
}

function bindEvents(){
    var buttons = document.querySelectorAll("button");
    for(let button of buttons){
        button.addEventListener("click",showTic);
    }
}

function isNotBlank(button){
    return button.innerText.trim().length==0?false:true;
}

function isRowSame(first,second,third){
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third]))  {
    return buttons[first].innerText == buttons[second].innerText && buttons[first].innerText == buttons[third].innerText;
    }       
    return false; 
}

function isGamOver(){
    var gameOver = "";

    if(isRowSame(0,1,2)){
        gameOver = "Game Over";
        gameEnd = true;
    }
    else if(isRowSame(3,4,5)){ 
        gameOver = "Game Over";
        gameEnd = true;
    }
      else if(isRowSame(6,7,8)){ 
        gameOver = "Game Over";
        gameEnd = true;
      }
        else if(isRowSame(0,4,8)){ 
        gameOver = "Game Over";
        gameEnd = true;
        }
        else if(isRowSame(2,4,6)){ 
        gameOver = "Game Over";
        gameEnd = true;
        }
    document.querySelector("#result").innerText = gameOver;
}
function reset() {
    console.log("Show Tic Call");
    if(gameEnd){
        if(this.innerText.trim().length==0){
    	    this.innerText = null;
        }
    }
}