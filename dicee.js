var i = Math.floor(Math.random()*6 + 1) ;
var j = Math.floor(Math.random()*6 + 1) ;
var arr=[i,j];
// document.querySelectorAll(".dice p")[0].textContent=i;
// document.querySelectorAll(".dice p")[1].textContent=j;

if(i>j){
	document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(j>i){
	document.querySelector("h1").innerHTML="Player 2 Wins!";
}else{
	document.querySelector("h1").innerHTML="Its a DRAW!";
}

for(var k=0;k<2;k++){
	if(arr[k]==1){
		document.getElementsByTagName("img")[k].setAttribute("src","images/dice1.png");
	}else if(arr[k]==2){
		document.getElementsByTagName("img")[k].setAttribute("src","images/dice2.png");
	}else if(arr[k]==3){
		document.getElementsByTagName("img")[k].setAttribute("src","images/dice3.png");
	}else if(arr[k]==4){
		document.getElementsByTagName("img")[k].setAttribute("src","images/dice4.png");
	}else if(arr[k]==5){
		document.getElementsByTagName("img")[k].setAttribute("src","images/dice5.png");
	}else{
		document.getElementsByTagName("img")[k].setAttribute("src","images/dice6.png");
	}
}