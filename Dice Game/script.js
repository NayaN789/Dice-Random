//random img 1

var randomnumber1 = Math.floor(Math.random() * 6) + 1; //1 to 6 number
var randomdiceimg = "dice" + randomnumber1 + ".png"; // dice1.png to dice6.png
var randomimgsource = "images/" + randomdiceimg; //img dice1.png to dice6.png
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimgsource);

//random img 2

var randomnumber2 = Math.floor(Math.random() * 6) + 1; //1 to 6 number
var randomimgsource2 = "images/dice" + randomnumber2 + ".png"; //img dice1.png to dice6.png
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimgsource2);

//player won

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win!";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 win!";
} else {
  document.querySelector("h1").innerHTML = "The Game is Draw";
}
