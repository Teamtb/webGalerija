var i = 0;
var slike = ["prva","druga","treca","cetvrta","peta"];
var s = [];
var jezici = [];
var j = 1;

function prethodna() {
	
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
	
	i++;//i = i + 1; 
	if (i > 4) //ako je vece od ukupnog broja slika onda 
	{
		i = 0;//se vrati na prvu sliku
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
	

}
function jezik()
{
	var t = document.getElementById("jezik");
	if(j == 1)
	{
		j = 2;
		t.innerHTML = "Engleski";
		jezici[1].display = "none";
		jezici[0].display = "block";
	}
	else
	{
			j = 1;
			t.innerHTML = "Srpski";
			jezici[0].display = "block";
			jezici[1].display = "none";
			
	}
}
function setS()
{
	s[0] = document.getElementById("prva");
	s[1] = document.getElementById("druga");
	s[2] = document.getElementById("treca");
	s[3] = document.getElementById("cetvrta");
	s[4] = document.getElementById("peta");
	
	jezici[0] = document.getElementsByClassName("eng");
	jezici[1] = document.getElementsByClassName("srb");
}
