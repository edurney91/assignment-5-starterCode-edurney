

$(document).ready(function(){
	


$("#submit-btn").click(changeCity);


function changeCity(event){
	
	event.preventDefault();
	var city = $("#city-type").val(); 

	if (city == "NYC" || city == "New York City" || city == "New York") {
		$("body").attr("class", "nyc");
	} 
	else if (city == "SF" || city == "San Francisco" || city == "Bay Area") {
		$("body").attr("class", "sf");
	}
	else if (city == "LA" || city == "Los Angeles" || city == "LAX") {
		$("body").attr("class", "la");

	}

	else if (city == "ATX" || city == "Austin") {
		$("body").attr("class", "austin");
	}

	else if (city == "SYD" || city == "Sydney"){
		$("body").attr("class", "sydney");
		}
	else{
		$("body").attr("class", "error");
	}

	}

});


//JQuery PseudoCode//

// 1. user types city name
// // 2. user click #submit-btn
//3. do something to change url
// 4. based on name stored, background image needs to change.
	// - If a user submits:

//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//   - "Austin" or "ATX" make the background of the page austin.jpg
//   - "Sydney" or "SYD" make the background of the page sydney.jpg

