var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "dice" + randomNumber1 + ".png";
var srcImage1 = "./images/" + diceImage1;

document.querySelector(".img1").setAttribute("src", srcImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "dice" + randomNumber2 + ".png";
var srcImage2 = "./images/" + diceImage2;

document.querySelector(".img2").setAttribute("src", srcImage2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}

if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML = "It's a draw !";
}
