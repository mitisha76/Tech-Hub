$(document).ready(function()
{
	//setting window zoom level
	document.body.style.zoom = "70%";
	var content="";
	content1="<div class='row'>";
	//displaying news data
	var rowcount=0;
	 $.ajax({
	 		url:"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c74df6a4a25e41038848a9330387de25",
	 	 	success: function(data)
	 	 	{
	 	 		for(x in data.articles)
	 	 		{
	 	 			rowcount++;
	 	 			content1+="<div class='col-md-3 news'><div class='four'><img src='"+data.articles[x].urlToImage+"'><h1 class='text-center head'>"+data.articles[x].title+"</h1><div class='overlay'><div class='text'><p>"+data.articles[x].description+"</p><br/><a target='_blank' href='"+data.articles[x].url+"'><button class='btn btn-lg btn-success'>Read More</button></a></div></div></div></div>";
	 	 			if(rowcount%3==0)
					{
						content1+="</div><div class='row'>";
					}
	 	 		}
				content1+="</div>";
				//$(".loader").hide();
				$(".abc").append(content1);
	 	 }});
  });