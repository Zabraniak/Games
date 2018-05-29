window.onload=function(){

alert('Witamy w grze kółko i krzyżyk! PS: Zawsze zaczyna X!');

var restart=document.getElementById("restart");
var allBlock=document.getElementsByClassName("block");

for(var i=0;i<9;i++)
{
document.getElementById("game").innerHTML+='<div class="block"></div>';
}

var step=0;

document.getElementById("game").onclick=function(event)
{
if(winner.innerHTML == '')
{
if(event.target.className == "block")
{
if(event.target.innerHTML == '')
{
if(step%2==0)
{
event.target.innerHTML = 'x';
}
else
{
event.target.innerHTML = '0';
}
step++;
checkWinner();
}
}
}
}

function checkWinner()
{
var winner=document.getElementById("winner");
    
    // Wszystkie wypełnione
    if(allBlock[0].innerHTML != '' &&
       allBlock[1].innerHTML != '' &&
       allBlock[2].innerHTML != '' &&
       allBlock[3].innerHTML != '' &&
       allBlock[4].innerHTML != '' &&
       allBlock[5].innerHTML != '' &&
       allBlock[6].innerHTML != '' &&
       allBlock[7].innerHTML != '' &&
       allBlock[8].innerHTML != '')
    	{
    	winner.innerHTML = 'Remis!';
    	restart.style.display = "block";
    	}

   	// X wygrywa
    if((allBlock[0].innerHTML == 'x' &&
       allBlock[1].innerHTML == 'x' &&
       allBlock[2].innerHTML == 'x') ||
       (allBlock[3].innerHTML == 'x' &&
       allBlock[4].innerHTML == 'x' &&
       allBlock[5].innerHTML == 'x') ||
       (allBlock[6].innerHTML == 'x' &&
       allBlock[7].innerHTML == 'x' &&
       allBlock[8].innerHTML == 'x') 
       ||
       (allBlock[0].innerHTML == 'x' &&
       allBlock[3].innerHTML == 'x' &&
       allBlock[6].innerHTML == 'x') ||
       (allBlock[1].innerHTML == 'x' &&
       allBlock[4].innerHTML == 'x' &&
       allBlock[7].innerHTML == 'x') ||
       (allBlock[2].innerHTML == 'x' &&
       allBlock[5].innerHTML == 'x' &&
       allBlock[8].innerHTML == 'x')
       ||
       (allBlock[0].innerHTML == 'x' &&
       allBlock[4].innerHTML == 'x' &&
       allBlock[8].innerHTML == 'x') ||
       (allBlock[2].innerHTML == 'x' &&
       allBlock[4].innerHTML == 'x' &&
       allBlock[6].innerHTML == 'x'))
    	{
        winner.innerHTML = 'Wygrywają krzyżyki!';
        restart.style.display = "block";
    	}

     // O wygrywa
     if((allBlock[0].innerHTML == '0' &&
       allBlock[1].innerHTML == '0' &&
       allBlock[2].innerHTML == '0') ||
       (allBlock[3].innerHTML == '0' &&
       allBlock[4].innerHTML == '0' &&
       allBlock[5].innerHTML == '0') ||
       (allBlock[6].innerHTML == '0' &&
       allBlock[7].innerHTML == '0' &&
       allBlock[8].innerHTML == '0') 
       ||
       (allBlock[0].innerHTML == '0' &&
       allBlock[3].innerHTML == '0' &&
       allBlock[6].innerHTML == '0') ||
       (allBlock[1].innerHTML == '0' &&
       allBlock[4].innerHTML == '0' &&
       allBlock[7].innerHTML == '0') ||
       (allBlock[2].innerHTML == '0' &&
       allBlock[5].innerHTML == '0' &&
       allBlock[8].innerHTML == '0')
       ||
       (allBlock[0].innerHTML == '0' &&
       allBlock[4].innerHTML == '0' &&
       allBlock[8].innerHTML == '0') ||
       (allBlock[2].innerHTML == '0' &&
       allBlock[4].innerHTML == '0' &&
       allBlock[6].innerHTML == '0'))
    	{
        winner.innerHTML = 'Wygrywają kółka!';
        restart.style.display = "block";
    	}
}

// Pojawienie się przycisku restart i możliwość restartu
restart.onclick=function()
{
for(var i=0;i<9;i++)
{
allBlock[i].innerHTML = '';
restart.style.display = "none";
winner.innerHTML = "";
}
}

}