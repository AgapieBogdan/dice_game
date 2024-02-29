var randomImage = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var randomNumber1 = Math.floor(Math.random()*randomImage.length);
var randomNumber2 = Math.floor(Math.random()*randomImage.length);

var buttons = document.getElementsByClassName('roll');
for (var i=0; i< buttons.length; i++)
{   
    
    
    buttons[i].addEventListener("click", function(){
        document.getElementById('image').src = randomImage[randomNumber1];
          

        document.getElementById('image2').src = randomImage[randomNumber2];

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

randomNumber1 = Math.floor(Math.random()*randomImage.length);
randomNumber2 = Math.floor(Math.random()*randomImage.length);

});

}








