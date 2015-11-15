var min=1;
var max=4;

function btnder(){
	min++;
	 if(min>4){
	 	min=1;}	
 document.getElementById('imagen').src = "images/"+min+".png"
  
}

function btnizq(){
	max--;
	if(max==0)
	max=4;
	
  document.getElementById('imagen').src = "images/"+max+".png";
}
