// first Picture

 // Generate a random number between 1 and 6
var randomNumber1= Math.floor(Math.random() * 6) + 1;

  // Build the path to the random dice image
var randomNamePicture1= "./images/dice"+randomNumber1+".png";

 // Update the src attribute with the new dice image path
document.querySelectorAll("img")[0].setAttribute("src",randomNamePicture1);


// Second Picture

var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomNamePicture2= "./images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomNamePicture2);

if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML= "draw!";
}
else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML= " 🚩Player 1 wins";
} else {
    document.querySelector("h1").innerHTML= "Player 2 wins 🚩";   
}
