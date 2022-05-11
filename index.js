//alert("hello");
var random= Math.floor(Math.random()*6)+1;
var imageName = "dice"+random+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imageName);
var random1= Math.floor(Math.random()*6)+1;
var imageName2 = "dice"+random1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", imageName2);

if(random>random1)
{document.querySelector("h1").innerHTML="player 1 wins";}
else if(random<random1)
{document.querySelector("h1").innerHTML="player 2 wins";}
else{
    document.querySelector("h1").innerHTML="draw";
}

