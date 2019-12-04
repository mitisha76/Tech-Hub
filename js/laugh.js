$(document).ready(function()
{
	//setting window zoom level
	document.body.style.zoom = "70%";
	var content1="";
	//displaying jokes on click of button
	$("button").click(function()
	{
		content1="";
		$("#joke").html("");
		$("#joke1").html("");
    	$.get( "https://official-joke-api.appspot.com/random_joke", function(result,status){
   		$("#joke").text(result.setup);
   		content1+=result.punchline+"&#128514;";
   		$("#joke1").append(content1);
	});
});
});