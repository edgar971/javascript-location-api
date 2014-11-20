/* load site default js */
//@prepros-prepend components/template/_jquery.js
//@prepros-prepend components/template/default.js

/* load project js 
	
*/


$(window).load(function(){
	var map = L.map('map').setView([51.505, -0.09], 13);
/*
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
*/
	if(navigator.geolocation) {
		console.log("Geo Location API is available");
		
		//get the users location coords
		navigator.geolocation.getCurrentPosition(function(location, error){
			//do something 
			console.log(location);
			if(location.coords) {
				var lat = location.coords.latitude;
				var lon = location.coords.longitude;
				//get city and state using https://developers.google.com/maps/documentation/geocoding/
				
				//build request URL
				var ajaxURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
				//ajaxURL+= lat + ',' + lon + '&result_type|street_address&location_type|ROOFTOP';
				ajaxURL+= lat + ',' + lon + '&result_type|street_address&location_type|ROOFTOP';
				
				//get the info
				console.log("Results:");
				$.getJSON(ajaxURL, function(response){
					$.each(response.results, function(index, address){
						console.info(address);
						$('.results').append('<p>' + address.formatted_address + '</p>');
					});
				});
			
			}
		});
		
		
	}
	
});