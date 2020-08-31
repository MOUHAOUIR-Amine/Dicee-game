var n=Math.random();
n=(n*6)+1;
n=Math.floor(n);
var m=Math.random();
m=(m*6)+1;
m=Math.floor(m);


document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+m+".png");

if (n>m){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (n<m) {
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML="equality";
}
