$(document).ready(function()
	{
	//setting window zoom level
	document.body.style.zoom = "70%";
	//declaring variables for creating elements
	var d="";
	var content="";
	var content1="";
	var content2="";
	var content3="";
	//api-key
	var key="?client_id=6ce56aa9220d97a25db6&client_secret=3135ef1b21ce53e81e9b5f450df007873cae6669";
	//calling function on pressing enter key
	$(document).on("change", "input",function()
	{
		//empting the content of div-main and main1 to avoid overlapping of previous and new data
		$("#main").html("");
		$(".main1").html("");
		$(".col-md-8").html("");
		$(".but").html("");
		$(".error1").html("");
		content1="";
		content2="";
		content3="";
		//storing user name in variable d
		d=$("#myUser").val();
		if(d.length==0)
		{
			alert("Please enter some text");
			return false; 
		}
		//fetching data of user whose username is entered
		$.ajax({
	  			method: "GET",
	  			crossDomain: true,
	  			url: "https://api.github.com/users/"+d+key,
	  			dataType: "json",
	  			async: true,
	  			success: function(data) 
	  			{	
	  				//displaying data of user
	  				$("#main").attr("class","main-box col-md-2");
	  				$("#main").append(
					`
					<img class="img-rounded img-responsive" id="myImage" src=${data.avatar_url}/>
					<h2 class="data" style='font-size:45px;'>${data.name}</h2>
					<p class="data ">${data.login}</p>
					<p class="data">${data.bio}</p>
					<p class="data">Following: ${data.following}</p>
					<p class="data">Followers: ${data.followers}</p>`
	  			)
	  			},
	  			error: function() 
	  			{
	    			infoContent = "<p style='font-size:50px;' class='text-center text-success'>Sorry, data is not coming through. Refresh and try again.</p>";
	    			alert("Network Issue!..Please check..");
	  			}
			});
		//fetching data of user followers whose username is entered
		$.ajax({
	  				method: "GET",
	  				crossDomain: true,
	  				url: "https://api.github.com/users/"+d+"/followers?per_page=50"+key,
	  				dataType: "json",
	  				async: true,
	  				success: function(data) 
	  				{	
	  					content1+="<table class='table-striped table-hover table-condensed' style='width:100%;'><tr><th>Profile-Pic</th><th>UserName</th></tr>";
	  					for(a in data)
	  					{
	  						content1+="<tr><td><img id='follower_images' src='"+data[a].avatar_url+"'/></td><td><a target='_blank' style='text-decoration:none;color:black;' href='"+data[a].html_url+"'>"+data[a].login+"</a></td></tr>";
	  					}
	  					content1+="</table>";
	  					//displaying data of user followers on clicking of button
	  					$(".but").append(
	  						`<button type='button' 
	  						class='btn btn-success btn-lg' data-toggle='modal' data-target='#myModal'>Followers</button>
  							<div class='modal fade' id='myModal' role='dialog'>
    							<div class='modal-dialog'>
      							<div class='modal-content'>
        							<div class='modal-header'>
          								<button type='button' class='close' data-dismiss='modal'>&times;</button>
          								<h4 class='modal-title text-center text-primary'>Followers List</h4>
        							</div>
        							<div class='modal-body follow'>
        							</div>
        							<div class='modal-footer'>
          								<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>
        								</div>
      							</div>
    							</div>
    						</div>`
				  		)
	  					//appending content of followers in modal body
	  					$(".follow").append(content1);
	  					},
	  					error: function() 
	  					{
	    					infoContent = "<div>Sorry, data is not coming through. Refresh and try again.</div>";
	  					}
					});
		//fetching data of users following  whose username is entered
		$.ajax({
	  			method: "GET",
	  			crossDomain: true,
	  			url: "https://api.github.com/users/"+d+"/following?per_page=50"+key,
	  			dataType: "json",
	  			async: true,
	  			success: function(data) 
	  			{	
	  				content2+="<table class='table-striped table-hover table-condensed' style='width:100%;'><tr><th>Profile-Pic</th><th>UserName</th></tr>";
	  				for(a in data)
	  				{
	  					content2+="<tr><td><img id='following_images' src='"+data[a].avatar_url+"'/></td><td><a target='_blank' style='text-decoration:none;color:black;' href='"+data[a].html_url+"'>"+data[a].login+"</a></td></tr>";
	  				}
	  				content2+="</table>";
	  				//displaying data of user following on clicking of button
	  				$(".but").append(
	  					`<button type='button' 
	  					class='btn btn-success btn-lg' data-toggle='modal' data-target='#abc'>Following</button>
  						<div class='modal fade' id='abc' role='dialog'>
    						<div class='modal-dialog'>
      							<div class='modal-content'>
        							<div class='modal-header'>
          								<button type='button' class='close' data-dismiss='modal'>&times;</button>
          								<h4 class='modal-title text-center text-primary'>Following List</h4>
        							</div>
        							<div class='modal-body follow1'></div>
        							<div class='modal-footer'>
          								<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>
        							</div>
      							</div>
    						</div>
    					</div>`
				  	)
	  				//appending content of user following in modal body 
	  				$(".follow1").append(content2);
	  				},
	  				error: function() 
	  				{
	    				infoContent = "<div>Sorry, data is not coming through. Refresh and try again.</div>";
	    				
	  				}
				});
		//fetching data of user repositories
			$.ajax({
	  				method: "GET",
	  				crossDomain: true,
	  				url: "https://api.github.com/users/"+d+"/repos"+key,
	  				dataType: "json",
	  				async: true,
	  				success: function(data) 
	  				{	
	  					content3+="<h1 class='text-center front'>REPOSITORIES</h1><br/><table id='myrepos' class=' table-striped table-hover table-condensed' style='width:100%;'><tr><th>Repositry-Name</th><th>Repositry-URL</th></tr>";
	  					for(a in data)
	  					{
	  						content3+="<tr><td>"+data[a].name+"</td><td><a target='myFrame' href='"+data[a].html_url+"'>"+data[a].html_url+"</a></td></tr>";
	  					}
	  					content3+="</table>"; 
	  					$(".col-md-8").attr("id","repo");
	  					//appending user repositories data inside div
	  					$(".col-md-8").append(content3);
	  				},
	  				error: function() 
	  				{
	    				infoContent = "<div>Sorry, data is not coming through. Refresh and try again.</div>";
	 
	  				}
				});
		});
	
	});
	