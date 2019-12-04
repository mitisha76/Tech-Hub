$(document).ready(function()
{
		var i=0;
		//setting window zoom level
		document.body.style.zoom = "70%";
		//displaying quotes after every 2 seconds
		setInterval(function()
			{
				i=i+1;
				$.get("https://programming-quotes-api.herokuapp.com/quotes/lang/en" , function(data, status){
			$("#quote").text(data[i].en);
		});},2000);
 });