var randomImage = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var randomNumber1 = Math.floor(Math.random()*randomImage.length);
var randomNumber2 = Math.floor(Math.random()*randomImage.length);
var player1score=0;
var player2score = 0;
var disp1 = document.getElementById("display1");
var disp2 = document.getElementById("display2");


//scor + imagine 

var buttons = document.getElementsByClassName('roll');
for (var i=0; i< buttons.length; i++)
{   
    
    
    buttons[i].addEventListener("click", function(){
        document.getElementById('image').src = randomImage[randomNumber1];
          

        document.getElementById('image2').src = randomImage[randomNumber2];

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    player1score++;
disp1.innerHTML = player1score;    
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    player2score++;
    disp2.innerHTML = player2score;
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

randomNumber1 = Math.floor(Math.random()*randomImage.length);
randomNumber2 = Math.floor(Math.random()*randomImage.length);

});

}

//reset score 

document.getElementById("resetare").addEventListener('click', function() {
    disp1.innerHTML = "0";
    disp2.innerHTML = "0";
    player1score=0;
    player2score =0;
    document.querySelector("h1").innerHTML = "Hello, let's play a Dice Game!";
});








