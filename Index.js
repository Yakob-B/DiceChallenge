var randomNumber1 = Math.floor(Math.random()*6 )+1;
var randomDiceImage = "dice" +randomNumber1 +".png";//this generate the imge from 1 -6
var randomImageSource = "images/" + randomDiceImage;
var Image1 = document.querySelectorAll("img")[0];
 Image1.setAttribute("src",randomImageSource);

// For image 2

// step1 generate random number fro 1-6
var randomNumber2 =Math.floor( Math.random()*6)+1;
//step 2 generate the imge from 1 -6
var randomDiceImage2 = "dice" + randomNumber2 + ".png";


//connetct the random image to be sellected from images folder
var randomImageSource2 = "images/"+randomDiceImage2;
// set the attribute of the image to the random one 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Win! ";
} 
else if(randomNumber2> randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Win!🚩";
}
else {
    document.querySelector("h1").textContent = "both are equal";
}