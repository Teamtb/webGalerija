var i = 1;

function sledecaSlika() {
	if(i == 1)
	{
		document.getElementById("slika").src = "images/treca.jpg";
		i = 2;
	}else
	if(i == 2)
	{
		document.getElementById("slika").src = "images/cetvrta.jpg";
		i = 3;
	}else
	if(i == 3)
	{
		document.getElementById("slika").src = "images/druga.jpg";
		i = 1;
	}
	
	
}