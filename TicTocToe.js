var count = 1;
var colorX = document.getElementById("x");  	var colorO = document.getElementById("o") 
var restart =document.getElementById("reset");
var div1= document.getElementById("div1");
var div2= document.getElementById("div2"); 
var div3= document.getElementById("div3");
var div4= document.getElementById("div4");
var div5= document.getElementById("div5");
var div6= document.getElementById("div6");
var div7= document.getElementById("div7");
var div8= document.getElementById("div8");
var div9= document.getElementById("div9");


function fun(control) {
  if(count <= 8){
			if(count%2!=0){		
	colorO.classList.add("color"); 		
	colorX.classList.remove("color");
			document.getElementById(control.id).innerHTML="X";  		
	}else{	
			colorX.classList.add("color");
			colorO.classList.remove("color"); 		
						document.getElementById(control.id).innerHTML="O";  		
	}
			count++;
			if(checkWin())
			{
							alert("winner");
	 restart.style.display="block"	;  
	 
			}
		}
		else {
	alert("Math Druw" );
			restart.style.display="block"	;
			    
		}
}

function reset(){
  var i;
				for(i=1;i<= 9;i++){					document.getElementById("div"+i).innerHTML="";  		count= 1;
		colorX.classList.add("color");
			colorO.classList.remove("color"); 	
			restart.style.display="none"	; 
			
			div1.classList.remove("winColor");
			div2.classList.remove("winColor"); 
			div3.classList.remove("winColor");  
			
			div4.classList.remove("winColor");
			div5.classList.remove("winColor"); 
			div6.classList.remove("winColor");   
			
			div7.classList.remove("winColor");
			div8.classList.remove("winColor"); 
			div9.classList.remove("winColor") ;
			
			div1.classList.remove("winColor");
			div4.classList.remove("winColor"); 
		 div7.classList.remove("winColor");  
		 
		 div2.classList.remove("winColor");
			div5.classList.remove("winColor"); 
			div8.classList.remove("winColor");   
			
			 div3.classList.remove("winColor");
			 div6.classList.remove("winColor"); 
				div9.classList.remove("winColor");   
				
				div1.classList.remove("winColor");
				div5.classList.remove("winColor"); 
				div9.classList.remove("winColor");   
				
				div3.classList.remove("winColor");
				div5.classList.remove("winColor"); 
				div7.classList.remove("winColor");  
				}
}

function checkWin() {
if(checkcondison(div1,div2,div3) )
				{
	     
	  			div1.classList.add("winColor");
					div2.classList.add("winColor"); 
					div3.classList.add("winColor");  
					return true;		 
	}else if( checkcondison(div4,div5,div6) ){
					div4.classList.add("winColor");
					div5.classList.add("winColor"); 
					div6.classList.add("winColor");  
					return true;		
	}else if( checkcondison(div7,div8,div9) ){
					div7.classList.add("winColor");
					div8.classList.add("winColor"); 
					div9.classList.add("winColor")
					return true;
	}else if( checkcondison(div1,div4,div7) ){
		   	div1.classList.add("winColor");
					div4.classList.add("winColor"); 
					div7.classList.add("winColor");  
					return true;	
	}	else if( checkcondison(div2,div5,div8) ){
		   	div2.classList.add("winColor");
					div5.classList.add("winColor"); 
					div8.classList.add("winColor");  
					return true;	
	}	else if( checkcondison(div3,div6,div9) ){
		   	div3.classList.add("winColor");
					div6.classList.add("winColor"); 
					div9.classList.add("winColor");  
					return true;	
	}	else if( checkcondison(div1,div5,div9) ){
		   	div1.classList.add("winColor");
					div5.classList.add("winColor"); 
					div9.classList.add("winColor");  
					return true;	
	}	else if( checkcondison(div3,div5,div7) ){
		   	div3.classList.add("winColor");
					div5.classList.add("winColor"); 
					div7.classList.add("winColor");  
					return true;	
			}		
	}	
function checkcondison(div1,div2,div3) {
	if(div1.innerHTML!="" && div2.innerHTML!="" && div2.innerHTML!="" && div1.innerHTML==div2.innerHTML && div2.innerHTML==div3.innerHTML)
			 {
							return true ;
			}
}
