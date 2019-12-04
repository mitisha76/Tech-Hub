$(document).ready(function()
{
	//setting window zoom level
	document.body.style.zoom = "70%";
	var content="";
	var content1="";
	//displaying book data
	$(document).on("change", "input",function()
	{
		$(".abc").html("");
		content=$("#myBook").val();
		if(content.length==0)
		{
			alert("Please Enter Some text");
		}
		else
		{
			content1="<div class='row'>";
			var rowcount=0;
		 	$.ajax({url:"https://www.googleapis.com/books/v1/volumes?q="+content, success: function(data){
   				for(x in data.items)
				{
					rowcount++;
					content1+="<div class='col-md-3 round'><h2 class='text-center myClass'>"+data.items[x].volumeInfo.title+"<h2></br><center><p class='myImage'><img class='book' src='"+data.items[x].volumeInfo.imageLinks.smallThumbnail+"'></p></center></br><p class='text-center text-danger'>Author : "+data.items[x].volumeInfo.authors+"</p><p class='text-center text-danger'>Publisher : "+data.items[x].volumeInfo.publisher+"</p><center><a target='_blank' href='"+data.items[x].volumeInfo.previewLink+"'><br/><button class='btn btn-success'>Read More</button></a></center></div>";
					if(rowcount%3==0)
					{
						content1+="</div><div class='row'>";
					}
				}
				content1+="</div>";
				$(".abc").append(content1);
				}});
		 }
    });

});
