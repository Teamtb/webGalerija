var i = 0;
var slike = ["prva","druga","treca","cetvrta","peta"];
var s = [ , , , ];

function prethodna() {
	setS();
	i--; //i = i - 1; ovo je komentar, da se lakse razumije kod //
	if (i < 0)
	{
		i = 4;
	}
	document.getElementById("slika").src= "images/" + slike[i] + ".jpg";

	if((i+1) == 5)
	{
		s[0].style.borderWidth = "0px";
	}else
	{
		s[i+1].style.borderWidth = "0px";
	}
	s[i].style.borderWidth = "5px";
}	

function naredna() {
	setS();
	i++;//i = i + 1; 
	if (i > 4)
	{
		i = 0;
	}
	document.getElementById("slika").src = "images/" + slike[i] + ".jpg";
	
	//treba if za granicne slucaje
	if((i-1) == -1)
	{
		s[4].style.borderWidth = "0px";
	}else
	{
		s[i-1].style.borderWidth = "0px";
	}
	//s[i-1].style.borderWidth = "0px";
	s[i].style.borderWidth = "5px";
	
	//document.getElementById("druga").style.borderWidth = "5px";
	
	// if(i == 1)
	// {
		// document.getElementById("slika").src = "images/prva.jpg";
		// i = 2;
	// }else
	// if(i == 2)
	// {
		// document.getElementById("slika").src = "images/druga.jpg";
		// i = 3;
	// }else
	// if(i == 3)
	// {		
		// document.getElementById("slika").src = "images/treca.jpg";
		// i = 1;
	
	// }
}
function setS()
{
	s[0] = document.getElementById("prva");
	s[1] = document.getElementById("druga");
	s[2] = document.getElementById("treca");
	s[3] = document.getElementById("cetvrta");
	s[4] = document.getElementById("peta");
}
